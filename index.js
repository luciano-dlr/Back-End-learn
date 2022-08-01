class persona {
    constructor(nombre, apellido, libro, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [libro];
        this.mascota = [mascota];
    }

    getFullname() {
        return `${this.nombre}${this.apellido}`
    }

    addMascota(nuevaMascota) {
        return 'el usuario ahora tiene ' + this.mascota.push(nuevaMascota) + ` mascotas, acabas de agregar ${nuevaMascota}`
    }

    countMascotas() {
        return 'la persona tiene ' + this.mascota.length + ' mascotas actualmente';
    }

    addBook(nombre, autor) {
        return 'el usuario ahora tiene ' + this.libro.push({ nombre, autor }) + ` libros, acabas de agregar un libro llamado ${nombre} del autor ${autor}`
    }

    getBookNames() {

        return this.libro.map(function (libroEnpropiedad) {

            return `${libroEnpropiedad.nombre}`;
        });

    }

}

const usuario = new persona('joaquin', 'gual', 'harry potter', 'boxer',);

// Usuario
console.log(usuario)

// // Nombre completo
// console.log('el nombre del usuario es ' + usuario.getFullname());

// // Agregar Mascota
// console.log(usuario.addMascota('chiguagua'));

// // Cantidad de Mascotas
// console.log(usuario.countMascotas())

// // Agregar un libro con nombre y autor
// console.log(usuario.addBook('Juego De Tronos', 'George R. R. Martin'))
// console.log(usuario.addBook('star wars', 'George Lucas'))

// // Consultar solo el nombre de cada libro del usuario
// console.log(usuario.getBookNames());



