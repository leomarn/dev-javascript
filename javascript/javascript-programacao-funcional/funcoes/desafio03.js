const pfs = require('fs/promises')
const fs = require('fs')
const path = require('path')

function lerNomesdeArquivos(caminho) {
    return new Promise (resolve => {
         pfs.readdir(caminho).then(files => {
            const file = files.filter(file => file.endsWith('.srt'))
            resolve(file) 
        })  
    })
}

const caminho = path.join(__dirname, '/legendas')

async function receberNomes(){
    
    const nomes = await lerNomesdeArquivos(caminho)
    
    const conteudo = []
    for(let index = 0; index < nomes.length; index++){
        const diretorio = path.join(__dirname, '/legendas', nomes[index])
        conteudo[index] = fs.readFileSync(diretorio)
    }
    console.log(conteudo[2].toString())
}

receberNomes()