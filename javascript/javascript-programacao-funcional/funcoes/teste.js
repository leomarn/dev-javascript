// function esperarTempo (tempo = 2000){
//     return new Promise(resolve => {
//         setTimeout(( ) => {
//             resolve('Resposta!')
//         }, tempo)
//     })
// }

// const executar = async () => {
//     const esperar = await new esperarTempo()

//     console.log(esperar)
// }

// executar()



function checaErro(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Deu erro')
        }else {
            resolve(valor)
        }
    })
}

checaErro('Testando...', 1).then(console.log).catch(console.log)