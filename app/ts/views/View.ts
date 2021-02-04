//indica que essa classe View é genérica(generics) <T> 
//dessa forma, pode-se passar um parâmetro quando as outras classes herdarem
//da View, MensagemView pode setar o <T> como string e NegociacoesView
//pode setar <T> como a classe Negociacoes, como ela desejar
//classe abstrata não pode ser instanciada, apenas herdada
//jQuery vai ajudar a rodar o código em celulares muito antigos

namespace Views { //Com isso, pode-se digitar 'Views.' e aparece 
  export abstract class View<T> {
    private _elemento: JQuery;

    constructor(selector: string) {
      this._elemento = $(selector)
    }

    update(model: T) {
      this._elemento.html(this.template(model))
    }
    //método abstrato é um método que não tem conteúdo, porém
    //a classe que herda como filho, pode chamar ela e codificar como quiser
    abstract template(model: T): string 
  }
}


