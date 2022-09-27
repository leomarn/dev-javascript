function esperarPor(tempo = 2000){
    return new Promise(resolve => setTimeout(() => resolve(), tempo))
}

// esperarPor(3000)
//     .then(()=> console.log('Executando promise...!'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promise...!'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promise...!'))

const retornarValor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 5000)
    })
}

const executar = async () => {
    let valor = await retornarValor()

    await esperarPor(3000)
    console.log(`Async/Await ${valor}...!`)
    await esperarPor(3000)
    console.log(`Async/Await ${valor + 1}...!`)
    await esperarPor(3000)
    console.log(`Async/Await ${valor + 2}...!`)
}


executar()