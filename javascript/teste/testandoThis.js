console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro da Função...')

    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)
}

logThis()

const logThisFun = () => {
  
    console.log('Dentro da Função Arrow...')

    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)


}

logThisFun()