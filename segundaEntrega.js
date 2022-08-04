const fs = require('fs/promises');

class Productos {
    constructor(ruta, id, titulo, precio, url) {
        this.ruta = ruta
        // this.id = id
        // this.titulo = titulo
        // this.precio = precio
        // this.url = url
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
    async save(producto) {
        try {
            const productoNuevo = await this.getAll();

            let id;
            if (productoNuevo.length == 0) {
                id = 1
            } else {
                id = productoNuevo[productoNuevo.length - 1].id + 1
            }

            const newObj = { id: id, ...producto }
            productoNuevo.push(newObj);

            await fs.writeFile(this.ruta, JSON.stringify(productoNuevo, null, 2));

            return id;

        } catch (error) {
            console.log('error senior')
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
    console.log(await pedido.getAll())
    console.log(await pedido.save({ id: 3, titulo: 'fanta', precio: 150, url: '#' }))
}

master()








