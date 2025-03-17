const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si 2 numeros son iguales

console.log( numero1 == numero2);// comparador no estricto solo se fija en el valor

console.log( numero1 === parseInt(numero2)); // comparador estricto, se fija en el valor y en el tipo de dato s


const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);//comparador no estricto
console.log(numero1 !== numero2);//comparador  estricto
