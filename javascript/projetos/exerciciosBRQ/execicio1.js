/* 3 - Escreva um algoritmo em JavaScript para ler 10 valores e escrever quantos desses
valores lidos estão no intervalo [10,20] (incluindo os valores 10 e 20 no intervalo) e quantos
deles estão fora deste intervalo. Utilize const e/ou let nas declarações de variáveis */

function lerValores(valorD, valorF) {
    let valores = []
    
    
    
    for(i = 0; i < 10; i++) {
      valores[i] = parseInt(prompt('Digite os valores!'))
      console.log(valores[i])
      if( valores[i] >= 10 && valores[i] <= 20) {
        valorD = valores[i]
      } else {
        valorF = valores[i]
      }
    }
    
    console.log(`'Quantidade de numeros no intervalo [10,20] foi: ${valorD}`)
    console.log(`'Quantidade de numeros FORA do intervalo [10,20]: ${valorF}`)
    
  
  }
    
    
  
  
  console.log(lerValores());