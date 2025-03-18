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

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
});
