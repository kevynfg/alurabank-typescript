export class Negociacao {
  //Estou setando como private onde somente
  //dentro da própria classe pode alterar variável private
  
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    //Usar '_' antes do valor da variável torna ela restrita
    //para alterações fora dos métodos da própria classe
    
  }

  //Cria-se getters para quem for utilizar a classe
  //possa acessar os valores do constructor
 
  get volume() {
    return this.quantidade * this.valor;
  }
}
