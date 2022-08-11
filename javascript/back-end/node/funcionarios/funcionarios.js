const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = f => f.pais === 'China'
const novos = pais => pais === true ? f : null 

axios.get(url).then(response => {
    const funcionarios = response.data

    const chineses = funcionarios.map(pais).filter(novos)

    console.log(chineses)
})
