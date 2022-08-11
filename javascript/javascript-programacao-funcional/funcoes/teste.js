const fs = require('fs'), path = require('path')


let pergunta1 = fs.readFileSync(path.join(__dirname, 'data.txt'))
console.log(pergunta1.toString())