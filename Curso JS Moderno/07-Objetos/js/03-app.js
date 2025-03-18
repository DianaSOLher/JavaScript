//Object literal
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

//Agreggar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"

delete producto.disponible;

console.log(producto);

