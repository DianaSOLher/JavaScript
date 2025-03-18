const carrito = [
    {nombre: 'Monitor 24 pulgadas', precio: 500},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Mouse', precio: 5030},
    {nombre: 'Escritorio', precio: 34},
    {nombre: 'CPU', precio: 434}
]

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}

//.forEach NO crea un arreglo nuevo
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
});

//.map crea un arreglo nuevo, llena una variable con un arreglo nuevo
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - ${producto.precio}`;
});

console.log(nuevoArreglo);
