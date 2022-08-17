const express = require('express')
const Productos = require('./data/data')

const app = express();
const product = new Productos();


app.get('/', (req, res) => {
    res.send(product.array())
})

app.get('/randomproduct', (req, res) => {
    const object = product.array();
    const randomId = Math.floor(Math.random() * object.length);
    res.send(object[randomId]);
})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}/`)
})