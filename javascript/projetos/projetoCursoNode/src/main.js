const port = 3003


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./database')
const { reset } = require('nodemon')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
    res.send(dataBase.getProducts())
})

app.get('/products/:id', (req, res) => {
    res.send(dataBase.getProduct(req.params.id))
})

app.post('/products', (req, res) => {
    const product = dataBase.saveProducts({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id', (req, res) => {
    const product = dataBase.saveProducts({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSOM
})

app.delete('/products/:id', (req, res) => {
    const product = dataBase.deleteProduct(req.params.id)
    res.send(product)
})


app.listen(port, () => console.log(`Open server in port: ${port}`))