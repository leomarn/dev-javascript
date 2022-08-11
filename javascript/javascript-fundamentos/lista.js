function comprimentar(nome){
    return `Olá, ${nome}!`
}

console.log(comprimentar('leomar'))

function converterIdadeEmAnosParaDias(n){
    return `Idade: ${n} em dias ${n*365}`
}

console.log(converterIdadeEmAnosParaDias(25))

function calcularSalario(h,v){
    let x=h*v
    return `Salário igual a R$ ${x}`
} 
console.log(calcularSalario(150, 40.5)) 

function nomeDoMes(n){
    switch(n){
        case 1:
            return `Mês de: "janeiro"`
            break
        case 2:
            return `Mês de: "fevereiro"`
            break
        case 3:
            return `Mês de: "março"`
            break
        case 4:
            return `Mês de: "abril"`
            break
        case 5:
            return `Mês de: "maio"`
            break
        case 6:
            return `Mês de: "junho"`
            break
        case 7:
            return `Mês de: "julho"`
            break
        case 8:
            return `Mês de: "agosto"`
            break
        case 9:
            return `Mês de: "setembro"`
            break
        case 10:
            return `Mês de: "outubro"`
            break
        case 11:
            return `Mês de: "novembro"`
            break
        case 12:
            return `Mês de: "dezembro"`
    }
}

console.log(nomeDoMes(2))