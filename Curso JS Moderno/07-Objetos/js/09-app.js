//Object literal
"use strict"; //Exige que se cumplan ciertas reglas en la escritura del codigo
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.seal(producto);// NO SE PUEDEN AGREGAR NI ELIMINAR PROPIEDADES PERO SI SE PUEDEN MODIFICAR LAS EXISTENTES

//producto.imagen = 'imagen.png';
producto.disponible = false;
//delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));