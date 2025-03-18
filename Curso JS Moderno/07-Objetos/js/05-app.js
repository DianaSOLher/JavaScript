//Object literal
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion : {
        medidas : {
            peso : '1kg',
            medida : '2m'
        },
        fabricacion : {
            pais : 'China'
        }
    }
}
console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion.pais);
