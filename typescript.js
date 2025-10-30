"use strict";
// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()
console.log("Ejercicio 1:");
var nombre = "Nia Blando";
var edad = 26;
var esEstudiante = true;
console.log(nombre);
console.log(edad);
console.log(esEstudiante);
console.log("\n");
// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.
console.log("Ejercicio 2:");
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
var resultadoSuma = sumar(5, 3);
console.log("Suma:", resultadoSuma);
var resultadoResta = restar(10, 4);
console.log("Resta:", resultadoResta);
var resultadoMultiplicacion = multiplicar(6, 7);
console.log("Multiplicación:", resultadoMultiplicacion);
console.log("\n");
// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
console.log("Ejercicio 3:");
var numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (num) {
    console.log(num * 2);
});
console.log("\n");
// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.
console.log("Ejercicio 4:");
var persona1 = {
    nombre: "Ana",
    edad: 22,
    esEstudiante: true
};
var persona2 = {
    nombre: "Luis",
    edad: 30,
    esEstudiante: false
};
var persona3 = {
    nombre: "Marta",
    edad: 27,
    esEstudiante: true
};
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log("\n");
// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.
console.log("Ejercicio 5:");
var variable;
variable = "Hola Mundo";
console.log("Valor como string:", variable);
variable = 42;
console.log("Valor como number:", variable);
console.log("\n");
// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
console.log("Ejercicio 6:");
var productos = [
    { nombre: "Producto 1", precio: 30, enStock: true },
    { nombre: "Producto 2", precio: 60, enStock: false },
    { nombre: "Producto 3", precio: 20, enStock: true },
    { nombre: "Producto 4", precio: 80, enStock: false },
    { nombre: "Producto 5", precio: 50, enStock: true },
    { nombre: "Producto 6", precio: 90, enStock: false }
];
function obtenerProductosEnStock(productos) {
    return productos.filter(function (producto) { return producto.enStock; });
}
function obtenerProductosSinStock(productos) {
    return productos.filter(function (producto) { return !producto.enStock; });
}
console.log("Productos en stock:", obtenerProductosEnStock(productos));
console.log("Productos sin stock:", obtenerProductosSinStock(productos));
console.log("\n");
// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
console.log("Ejercicio 7:");
var clientes = [
    { nombre: "Juan", edad: 30, esVip: true, ciudad: "Rosario" },
    { nombre: "Ana", edad: 25, esVip: false, ciudad: "Buenos Aires" },
    { nombre: "Luis", edad: 40, esVip: true, ciudad: "Córdoba" },
    { nombre: "Marta", edad: 35, esVip: false, ciudad: "La Plata" },
    { nombre: "Pedro", edad: 28, esVip: true, ciudad: "Mar del Plata" },
    { nombre: "Laura", edad: 32, esVip: false, ciudad: "Mendoza" }
];
function obtenerClientesVip(clientes) {
    return clientes.filter(function (cliente) { return cliente.esVip; });
}
function obtenerClientesRegulares(clientes) {
    return clientes.filter(function (cliente) { return !cliente.esVip; });
}
console.log("Clientes VIP:", obtenerClientesVip(clientes));
console.log("Clientes regulares:", obtenerClientesRegulares(clientes));
console.log("\n");
/*
Ejercicio 8: Catálogo de Productos - forEach
Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


Ejercicio 9: Catálogo de Productos - filter
Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Imprimor productosBaratos en la consola.


Ejercicio 10: Actualización de Inventario - map
Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Imprimir catalogoConDescuento en la consola.


Ejercicio 11: Búsqueda de Usuario - find
Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Imprimir en la consola el objeto del usuario encontrado.


Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length


Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.


Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Imprimir el array productosFormato en la consola.





Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:


const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);




Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz.
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores.

type Person = User;
const persons: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);


*/
console.log("Ejercicio 8:");
var catalogo = [
    { nombre: "Leche", precio: 30 },
    { nombre: "Pan", precio: 70 },
    { nombre: "Arroz", precio: 20 },
    { nombre: "Azúcar", precio: 90 }
];
catalogo.forEach(function (producto) {
    console.log("Producto: ".concat(producto.nombre, ", Precio: $").concat(producto.precio));
});
console.log("\n");
console.log("Ejercicio 9:");
var productosBaratos = catalogo.filter(function (producto) { return producto.precio < 50; });
console.log("Productos baratos:", productosBaratos);
console.log("\n");
console.log("Ejercicio 10:");
var catalogoConDescuento = catalogo.map(function (producto) {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.9
    };
});
console.log("Catálogo con descuento:", catalogoConDescuento);
console.log("\n");
console.log("Ejercicio 11:");
var usuarios = [
    { id: 1, nombre: "Juan", activo: true },
    { id: 2, nombre: "Ana", activo: false },
    { id: 3, nombre: "Luis", activo: true },
    { id: 4, nombre: "Marta", activo: false }
];
var usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.id === 3;
});
console.log("Usuario encontrado:", usuarioEncontrado);
console.log("\n");
console.log("Ejercicio 12:");
var usuariosActivos = usuarios.filter(function (usuario) { return usuario.activo; });
console.log("Cantidad de usuarios activos:", usuariosActivos.length);
console.log("\n");
console.log("Ejercicio 13:");
usuarios.forEach(function (usuario) {
    usuario.activo = false;
});
console.log("Usuarios después de desactivar:", usuarios);
console.log("\n");
console.log("Ejercicio 14:");
var productosFormato = catalogo.map(function (producto) {
    return "Producto: ".concat(producto.nombre, ", Precio: $").concat(producto.precio);
});
console.log("Productos en formato:", productosFormato);
console.log("\n");
console.log("Ejercicio 15:");
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logUser(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
console.log('Users:');
users.forEach(logUser);
console.log("\n");
console.log("Ejercicio 16:");
var persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
persons.forEach(logPerson);
console.log("\n");
