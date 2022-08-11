const sortear  = (min,max) => {
    (min > max)[min,max]=[max,min]
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
let n
do{
    n = sortear(0,10)
    console.log(`Valor: ${n}`)
}while(n != 10)
