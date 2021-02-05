import {Negociacao} from './Negociacao'
import {MeuObjeto} from './MeuObjeto'
export class Negociacoes implements MeuObjeto<Negociacoes> {
  private _negociacoes: Negociacao[] = [];
  //ou pode-se utilizar private _negociacoes: Array<Negociacao>;
  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao)
  }
  paraArray(): Negociacao[]{
    //sendo [].concat(this._negociacoes), não tipa o array fazendo dar erro e se tornando algo que pode ser qualquer tipo
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log('Impressão: ')
    console.log(JSON.stringify(this._negociacoes))
  }

  isEqual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray())

  }
}