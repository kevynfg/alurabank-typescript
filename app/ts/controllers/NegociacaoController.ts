class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
      this._inputData = <HTMLInputElement>document.querySelector('#data');
      this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
      this._inputValor = <HTMLInputElement>document.querySelector('#valor');
      this._negociacoesView.update(this._negociacoes)
    }

  adiciona(evento: Event) {
    evento.preventDefault()
    const negociacao = new Negociacao(
      //Usa uma expressão regular para trocar tudo que tem '-' por ','
      new Date(this._inputData.value.replace(/-/g, ',')),
       parseInt(this._inputQuantidade.value),
        parseFloat(this._inputValor.value))
        
        
      this._negociacoes.adiciona(negociacao)
        //Insere na página a view da table logo que iniciar
        //mando o array criado para ser renderizado
        //este método chama outro método para renderizar a table
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}