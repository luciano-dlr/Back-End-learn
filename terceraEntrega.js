const http = require('express');
const Mensaje = require('./src/Mensajes.js')


const app = express();
const msg = new Mensaje();

app.get('/', (req, res) => {
    res.send(msg.generarPlantillaMsg(2, 'cyan', 'alberto'))
});



let vistas = 0;
app.get('/', (req, res) => {
    res.send(`cantidad de vistas es ${vistas++}`)
});


let fecha = new Date().toDateString();
app.get('/fyh', (req, res) => {
    res.send(`fecha:${fecha}`)
})


const port = 4242;
const server = app.listen(port, () => {
    console.log(`Server http://localhost:${port}`)

});


    // const server = http.createServer((request, response) => {
    //     response.end('server', request.url);
    // })
    
    // const connectedServer = server.listen(8080, () => {
    //     console.log(`servidor en http:localhost8080/`)
    // })