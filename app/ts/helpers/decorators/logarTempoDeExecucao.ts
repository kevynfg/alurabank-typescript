export function logarTempoDeExecucao(emSegundos: boolean = false) {
    
    //propertyKey pega o nome do método
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    
    //descriptor.value é o método no qual o decorator foi chamado deve-se guardar o método original antes
    const metodoOriginal = descriptor.value;

    //...args recebe X parâmetros que o método original vai conter, atribuindo para 'any[]' um array que pode vir qualquer
    //tipo desse método
    descriptor.value = function(...args: any[]) {
      
      let unidade ='ms';
      let divisor = 1;
      if(emSegundos) {
        unidade = 'segundos'
        divisor = 1000
      }

      //Este bloco é inserido dentro do método antes de chamar o método
      console.log('-----------------');
      console.log(`os parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`)
      const t1 = performance.now()

      //Esta linha chama o método original na classe que eu quero testar a performance
      const retorno = metodoOriginal.apply(this, args)

      //Este bloco é inserido no final do método, antes de dar o 'return retorno' que vai executar o método
      const t2 = performance.now()
      console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`)
      console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`)
      return retorno;
    }

    return descriptor;

  }
}