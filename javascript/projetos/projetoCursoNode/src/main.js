const port = 3003

const express = require('express')

const app = express()

app.get('/products', (req, res, next) => {
    res.send({name: 'Leomar', phoneNumber: 91980873042})
})

app.listen(port, () => console.log(`Open server in port: ${port}`))