class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoes = new Negociacoes();
    }
    adiciona(evento) {
        evento.preventDefault();
        const negociacao = new Negaociacao(
        //Usa uma expressão regular para trocar tudo que tem '-' por ','
        new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach((item) => {
            console.log(item);
        });
    }
}
