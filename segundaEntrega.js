const fs = require('fs/promises');

class Productos {
    constructor(ruta, id, titulo, precio, url) {
        this.ruta = ruta
        this.id = id
        this.titulo = titulo
        this.precio = precio
        this.url = url
    }

    // save()

    async getAll() {
        try {
            const listaProductos = await fs.readFile(this.ruta, 'utf-8');
            // console.log(listaProductos)
            return JSON.parse(listaProductos);

        } catch (error) {
            return ['error senior']

        }
    }


    async getById() {
        try {
            const productoId = await Productos.length(this.id);
            // console.log(productoId.id)
            return JSON.parse(productoId);

        } catch (error) {
            return ['error senior']
        }
    }


    // deleteById()

    // deleteAll()


}

async function master() {

    const pedido = new Productos('./data/data.json')

    // console.log(Productos.data)

    // console.log(await pedido.getAll())
    console.log(await pedido.getById())
}

master()








