import {MeuObjeto} from './MeuObjeto'
export class Negociacao implements MeuObjeto<Negociacao> { //Implements obriga a classe usar o método herdado 
  
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    //Usar '_' antes do valor da variável torna ela restrita
    //para alterações fora dos métodos da própria classe
  }

  //Cria-se getters para quem for utilizar a classe
  //possa acessar os valores do constructor
 
  get volume() {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log('Impressão: ')
    console.log(
      `Data: ${this.data}
       Quantidade: ${this.quantidade}
       Valor: ${this.valor}
       Volume: ${this.volume}
      `
    )
  }

  isEqual(negociacao: Negociacao): boolean{
    return this.data.getDate() == negociacao.data.getDate()
      && this.data.getMonth() == negociacao.data.getMonth()
        && this.data.getFullYear() == negociacao.data.getFullYear()
      }
}
