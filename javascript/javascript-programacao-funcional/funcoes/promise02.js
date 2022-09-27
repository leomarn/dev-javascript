// setTimeout(function (){
//     console.log('Executando a callback...')

//     setTimeout(function (){
//         console.log('Executando a callback...')

//         setTimeout(function (){
//             console.log('Executando a callback...')

//         }, 2000)
//     }, 2000)
// }, 2000)


function esperarPor (tempo = 2000){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log('Executando a promise...')
            resolve('Vish...')
        }, tempo)
    })
}

esperarPor(3000).then(console.log)