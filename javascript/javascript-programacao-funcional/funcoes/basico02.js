function excQQC(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

const fn = () => console.log(3)
excQQC(fn)


const potencia = (base) => exp => Math.pow(base,exp)

const pot28 = potencia(2)(8)
const areatotal = area(6)(2)

console.log(areatotal)

function area(base){
    return function (altura){
        return base*altura
    }
}

console.log(areatotal)