const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
const exibirConteudo = (err,conteudo) => {
    console.log(conteudo.toString())
}

console.log('inicio...')
fs.readFile(caminho, {}, exibirConteudo)
console.log('fim...')


console.log('inicio sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim sync...')
