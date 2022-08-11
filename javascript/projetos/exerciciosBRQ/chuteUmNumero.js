let number, inputNum
do{
    number = Math.floor(Math.random()*10)
    inputNum = prompt("Digite um número")
    console.log(`Valor sorteado (${number}) != Valor Digitado (${inputNum})`)

} while (number != inputNum)

console.log(`Parabéns, valor sorteado (${number}) é igual ao inserido`)