const producto = "Monitor 20 Pulgadas";

//.repeat permite repetir una cadena de texto

const texto = 'En promocion '. repeat(3.3);

console.log(texto);
console.log(`${producto} ${texto} !!!!`);

//Split, dividir un string
const actividad = "Estoy aprendiendo java";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo #viri";
console.log(tweet.split("#"));