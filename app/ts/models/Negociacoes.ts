import {Negociacao} from '../models/index'
export class Negociacoes {
  private _negociacoes: Negociacao[] = [];
  //ou pode-se utilizar private _negociacoes: Array<Negociacao>;
  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao)
  }

  paraArray(): Negociacao[]{
    return this._negociacoes;
  }
}