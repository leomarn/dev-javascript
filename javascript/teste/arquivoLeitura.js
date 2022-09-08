const fs = require('fs')

const pessoa = {
    nome: 'Leomar',
    age: 29,
    address: 'Passagem Santa Fé'
}


fs.writeFile(__dirname + '/arquivoNovo.json', JSON.stringify(pessoa), (err) => {
    console.log(err || 'Arquivo Criado!')
})