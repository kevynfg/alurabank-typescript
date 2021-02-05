export function throttle(ms = 500) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const metodoOriginal = descriptor.value;

    let timer = 0
    
    descriptor.value = function(...args: any[]) {

      //Impede que o throttle dê bug quando aplicado em formulario ou eventos que tem event.preventDefault()
      //abaixo se usa o event implícito de funções
      if(event) event.preventDefault();

      clearInterval(timer)
      timer = setTimeout(() => {
        metodoOriginal.apply(this, args)
      }, ms);
    }

    return descriptor;

  }
}