class Negociacoes {
  private _negociacoes: Negaociacao[] = [];
  //ou pode-se utilizar private _negociacoes: Array<Negaociacao>;
  adiciona(negociacao: Negaociacao) {
    this._negociacoes.push(negociacao)
  }

  paraArray(){
    return this._negociacoes;
  }
}