function esperarTempo (tempo = 2000){
    return new Promise(resolve => {
        setTimeout(( ) => {
            resolve('Resposta!')
        }, tempo)
    })
}

const executar = async () => {
    const esperar = await new esperarTempo()

    console.log(esperar)
}

executar()