function gerarNumerosEntre(min, max){
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolved => {
        const aleatorio = parseInt(Math.random()*(max - min + 1)) + min
        resolved(aleatorio)
    })
}

gerarNumerosEntre(1,60).then(console.log)