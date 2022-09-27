function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolved, rejected) => {
        try {
            if ((Math.random() < chanceErro)) {
                resolved(valor)
            }
        } catch (e) {
            rejected(e)
        }
    })
}

funcionarOuNao('Testando...', 0.3)
                                .then(console.log)
                                .catch(console.log)