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

const { nombre, informacion, informacion: { fabricacion, fabricacion : {pais} } } = producto;


console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
