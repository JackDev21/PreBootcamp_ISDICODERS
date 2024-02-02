// Ahora, reformula el array (sin modificar manualmente el array original), introduciendo tu nombre en primera posición, tu apellido en segunda, 
// y además añade en otra posición tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

const array = ["J","A","C","K","C","A","N","T","O"]

array.unshift("Canto")
array.unshift("Jack")
array.splice(3, 0, 36);

console.log(`My name is ${array[0]} and I'm ${array[3]} years old.`)


/*
const name = ["J", "O", "N", "S", "N", "O", "W"];

name.unshift("Jon"); //  el método  unshift()  se utiliza para agregar elementos al inicio de un array, 
                     // incluso si el array es una constante. Aunque la constante  name  está declarada, aún puedes utilizar  unshift()  para agregar elementos al array.
name.splice(3, 0, 40);
console.log(`My name is ${name[0]} and I'm ${name[3]} years old.`);

output: My name is Jon and I'm 40 years old. 

*/