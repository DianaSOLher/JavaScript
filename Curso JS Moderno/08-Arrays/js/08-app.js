
//definir producto
const producto = {
    nombre : 'Monitor 23 pulgadas',
    precio : 400
}
//Destructuring en objetos
const {nombre} = producto;
console.log(nombre);

//Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [primero, , ...tercero] = numeros;
console.log(tercero);
console.log(primero);

