function gerarNumerosEntre(min, max, tempo){
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolved => {
        setTimeout(function () {
            const aleatorio = parseInt(Math.random()*(max - min + 1)) + min
            resolved(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1,60, 4000),
        gerarNumerosEntre(1,60, 2000),
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 500),
        gerarNumerosEntre(1,60, 250),
        gerarNumerosEntre(1,60, 125),
    ])
}

gerarVariosNumeros().then(console.log)
