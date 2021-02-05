import {MensagemView, NegociacoesView} from '../views/index';
import {Negociacao, Negociacoes} from '../models/index';
import {logarTempoDeExecucao} from '../helpers/decorators/index';
import {domInject} from '../helpers/decorators/index';
import {NegociacaoParcial} from '../models/index';
import {throttle} from '../helpers/decorators/index';
import {NegociacaoService} from '../service/index'
import {Imprime} from '../helpers/utils'
export class NegociacaoController {
    
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
 
    @domInject('#valor')
    private _inputValor: JQuery;


    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    private _service = new NegociacaoService();

    constructor() {
      
      this._negociacoesView.update(this._negociacoes)
    }

    
  //@logarTempoDeExecucao()
  @throttle()
  adiciona() {

    let data = new Date(this._inputData.val().replace(/-/g, ','))
    
    //verifica se o dia é domingo ou sábado
    if(this._DiaUtil(data)) {
      this._mensagemView.update('Somente negociações em dias úteis.')
      return
    }

    const negociacao = new Negociacao(
      //Usa uma expressão regular para trocar tudo que tem '-' por ','
      new Date(data), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()))
     
      
    this._negociacoes.adiciona(negociacao)   
    Imprime(negociacao, this._negociacoes)

    //Insere na página a view da table logo que iniciar
    //mando o array criado para ser renderizado
    //este método chama outro método para renderizar a table
    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update('Negociação adicionada com sucesso!')



      //Quando se faz a verificação com IF de uma seleção do "parentElement", o typescript permite continuar
      //Não tornando a variável undefined
      // const elCartao: HTMLDivElement = <HTMLDivElement>document.querySelector("#table_1")
      // let elPaiDoPai;
      // if(elCartao.parentElement) {
      //   elPaiDoPai = elCartao.parentElement.parentElement
      // }
      // console.log(elPaiDoPai)
  }

  private _DiaUtil(data: Date) {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo
  }

  @throttle()
  importaDados(){

    this._service.obterNegociacoes(res => {
        if(res.ok) {
          return res;
        } else {
          throw new Error(res.statusText) 
        }
      })
      .then(negociacoes => { 
        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))

        this._negociacoesView.update(this._negociacoes)
      })
  }
}
enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}