const saudacao = nome => `Fala  ${nome}, blz?`

console.log(saudacao(`Leomar`))

//arrow function com array
const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total+= n
    }
    return total
}
console.log(somar(1,2,3,4,5,6,7,8,9))



//arrow function como parâmetro
const potencia = base => exp => Math.pow(base,exp)

console.log(potencia(2)(3))
