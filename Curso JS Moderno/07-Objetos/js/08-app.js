//Object literal
"use strict"; //Exige que se cumplan ciertas reglas en la escritura del codigo
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto);

console.log(Object.isFrozen(producto));
//producto.imagen = 'imagen.png';
//producto.disponible = false;
//delete producto.precio;

console.log(producto);

