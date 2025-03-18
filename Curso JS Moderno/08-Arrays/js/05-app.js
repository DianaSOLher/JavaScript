
const meses = ['Enero', 'Febrero', 'Marzo'];

//meses[3] = 'Abril';
//Imperativas: modifica la variable original y reescribe y sobre ella misma modifica los datos
meses.push('Abril');
meses.pop();
meses.push('Mayo');

console.table(meses);

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

carrito.unshift(producto3);

console.table(carrito);