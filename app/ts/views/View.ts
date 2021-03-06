//indica que essa classe View é genérica(generics) <T> 
//dessa forma, pode-se passar um parâmetro quando as outras classes herdarem
//da View, MensagemView pode setar o <T> como string e NegociacoesView
//pode setar <T> como a classe Negociacoes, como ela desejar
//classe abstrata não pode ser instanciada, apenas herdada
//jQuery vai ajudar a rodar o código em celulares muito antigos 
import {logarTempoDeExecucao} from '../helpers/decorators/index';
export abstract class View<T> {
  private _elemento: JQuery;
  private _escapar: boolean;

  constructor(selector: string, escapar: boolean = false) {
    this._elemento = $(selector)
    this._escapar = escapar
  }
  
  //o dev pode selecionar se recebe a resposta em segundos ou ms, passando true, deixando null ou false
  @logarTempoDeExecucao(true)
  update(model: T) {
    
    let template = this.template(model)
    if(this._escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/g, '') //expressão regular para remover a tag script de dentro do template
    
    this._elemento.html(template)


  }
  //método abstrato é um método que não tem conteúdo, porém
  //a classe que herda como filho, pode chamar ela e codificar como quiser
  abstract template(model: T): string 
}



