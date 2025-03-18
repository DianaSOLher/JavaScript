
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

const producto3 = {
    nombre : 'Teclado',
    precio : 200
}

//Declarativa: paradigma que expresa la logica sin describir el flujo de control, no modifica el objeto y crea una nueva

let resultado;

resultado = [...carrito, producto];//Forma declarativa
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);
console.table(carrito);