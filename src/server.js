const express = require('express');
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
app.use(allRoutes);

app.get('/home', (req, res) => {
    return res.json('up');

});

app.listen(8080, () => console.log('Servidor operante!'))