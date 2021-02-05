//Tipo de programação procedural, diferente do que foi feito em Curso
//onde utiliza o polimorfismo
type MeuToken = string | number

function processToken(token: MeuToken) {
  if(typeof token === 'string') {
    return token.replace(/2/g, 'X')
  } else {
    
    return token.toFixed().replace(/2/g, 'X')
  }
}

//processar senhas para interface
const tokenProcessed = processToken(12345)
console.log(tokenProcessed)

const tokenProcessed2 = processToken("12345")
console.log(tokenProcessed2)