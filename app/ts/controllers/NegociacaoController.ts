import {MensagemView, NegociacoesView} from '../views/index'
import {Negociacao, Negociacoes} from '../models/index'
export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._negociacoesView.update(this._negociacoes)
    }

  adiciona(evento: Event) {
    evento.preventDefault()
    const negociacao = new Negociacao(
      //Usa uma expressão regular para trocar tudo que tem '-' por ','
      new Date(this._inputData.val().replace(/-/g, ',')),
       parseInt(this._inputQuantidade.val()),
        parseFloat(this._inputValor.val()))
        
        
      this._negociacoes.adiciona(negociacao)
        //Insere na página a view da table logo que iniciar
        //mando o array criado para ser renderizado
        //este método chama outro método para renderizar a table
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update('Negociação adicionada com sucesso!');


      
      //Quando se faz a verificação com IF de uma seleção do "parentElement", o typescript permite continuar
      //Não tornando a variável undefined
      // const elCartao: HTMLDivElement = <HTMLDivElement>document.querySelector("#table_1")
      // let elPaiDoPai;
      // if(elCartao.parentElement) {
      //   elPaiDoPai = elCartao.parentElement.parentElement
      // }
      // console.log(elPaiDoPai)
  }
}