class NegociacaoController {
    private _inputData = <HTMLInputElement> document.querySelector('#data');
    private _inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
    private _inputValor = <HTMLInputElement>document.querySelector('#valor');
    private _negociacoes = new Negociacoes()
    constructor() {

  }

  adiciona(evento: Event) {
    evento.preventDefault()
    const negociacao = new Negaociacao(
      //Usa uma expressão regular para trocar tudo que tem '-' por ','
      new Date(this._inputData.value.replace(/-/g, ',')),
       parseInt(this._inputQuantidade.value),
        parseFloat(this._inputValor.value))
        this._negociacoes.adiciona(negociacao)
        this._negociacoes.paraArray().forEach((item) => {
          console.log(item)
        })
  }
}