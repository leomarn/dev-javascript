const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

const bg = []

app.post('/users', (req, res) => {
    bg.push(req.body)
    console.log(bg)
    res.send('<h1>Parabéns</h1>')
})

app.post('/users/:id', (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Alterado</h1>')
})

app.get('/users', (req, res) => {
    res.send(bg)
})

app.listen(5050, function() {
    console.log("servidor rodando")
})