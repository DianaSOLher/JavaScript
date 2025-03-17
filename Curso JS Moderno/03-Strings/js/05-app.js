const producto = "Monitor 20 Pulgadas";
//.replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo '));

//.slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));//si el primer numero es mayor no hara nada

// Alternativa a slice 
// Diferencia entre substring y slice si le pasas un numero mayor de inicio y la extension, substring lo modifica y lo acomoda
console.log(producto.substring(2,1));
console.log(producto.substring(5,2));


const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));




