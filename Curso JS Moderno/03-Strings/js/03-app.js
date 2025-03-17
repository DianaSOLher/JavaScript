const producto = "Monitor 20\" ";

const precio = '30 USD ';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto + 'Con un precio de: $' + precio);

console.log("El producto " + producto + "tiene el precio de: " + precio);

//template
console.log(`El producto ${producto} tiene un precio es de $${precio}`);

