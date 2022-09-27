const gerarNumeros = (min, max, proibidos) => {
    if(min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        
        let aleatorio = parseInt(Math.random() * (max - min + 1)) + min

        if(proibidos.includes(aleatorio)){
            reject('Numero Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

gerarNumeros(1,5, [1,2,4])
    .then(console.log)
    .catch(console.log)