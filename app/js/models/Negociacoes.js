class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    //ou pode-se utilizar private _negociacoes: Array<Negociacao>;
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
