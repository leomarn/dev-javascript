let promessa = new Promise((cumprirPromessa) => {
    cumprirPromessa(['Ana', 'Daniel', 'Carlos', 'Samuel', 'Julia'])
})


promessa
        .then(nome => nome[2])
        .then(primeiraLetra => primeiraLetra[0])
        .then(letra => console.log(letra))