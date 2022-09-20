function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function value(a){
    return function (b){
        return function(fn){
            return fn(a,b)
        }
    }
}

console.log(value(2)(5)(add))
console.log(value(2)(5)(sub))


const saudacao = nome => `Fala  ${nome}, blz?`

console.log(saudacao(`Leomar`))

//arrow function com array
const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}
console.log(somar(1,2,3,4,5,6,7,8,9))

