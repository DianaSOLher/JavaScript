
//Imperativas: modifica la variable original y reescribe y sobre ella misma modifica los datos


const carrito = [];

//definir producto
const producto = {
    nombre : 'Monitor 23 pulgadas',
    precio : 400
}
const producto2 = {
    nombre : 'Celular',
    precio : 300
}
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre : 'Teclado',
    precio : 200
}
const producto4 = {
    nombre : 'Mouse',
    precio : 100
}


carrito.push(producto4);

carrito.unshift(producto3);

console.table(carrito);

//eliminar ultimo elemento del arreglo

carrito.pop();
console.table(carrito);


//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.splice(1,1);
console.table(carrito);
