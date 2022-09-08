const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios =  require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const nacionalidade = (array) => array.pais == 'China' 
    const mulheres = (array) => array.genero == 'F' 
    const salario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const funcionarioChines = funcionarios
    .filter(nacionalidade)
    .filter(mulheres)
    .reduce(salario)

    console.log(funcionarioChines)
})