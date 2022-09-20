// setTimeout(() => {
//     console.log('Executando callback...')

//     setTimeout(() => {
//         console.log('Executando callback...')

//         setTimeout(() => {
//             console.log('Executando callback...')

//         }, 2000)

//     }, 2000)

// }, 2000)

const awaitFor = (time = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')

            resolve('Vish..')
        }, time)
    })
}

awaitFor(3000).then(console.log)