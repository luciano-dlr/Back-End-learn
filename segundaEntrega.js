const fs = require('fs/promises');

class Productos {
    constructor(ruta) {
        this.ruta = ruta

    }

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

    async getById(id) {
        try {
            const producto = await this.getAll();
            const listaProductos = producto.findIndex((o) => o.id == id)

            if (listaProductos == -1) {
                return `No existe el producto con id : ${id}`;
            } else {
                producto[listaProductos] = { id };
                await fs.readFile(this.ruta);

            }
            return `Si existe el producto con el id: ${id}`;
        } catch (error) {
            console.log('error en buscar producto por id')
        }
    }

    async deleteById(id) {
        try {
            const producto = await this.getAll();
            const listaProductos = producto.findIndex((o) => o.id == id);

            if (listaProductos == -1) {
                return 'Elemento no encontrado'
            } else {
                producto.splice(listaProductos, 1);
                await fs.writeFile(this.ruta, JSON.stringify(producto, null, 2));
                return `producto ${id} eliminado`
            }


        } catch (error) {
            return 'No se pudo eliminar'
        }
    }

}

async function master() {

    const pedido = new Productos('./data/data.json')
    console.log(await pedido.getAll())
    console.log(await pedido.save({ id: 1, titulo: 'fanta', precio: 150, url: '#' }))
    console.log(await pedido.getById(4))
}

master()



