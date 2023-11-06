// Ahora, reformula el array (sin modificar manualmente el array original), introduciendo tu nombre en primera posición, tu apellido en segunda, 
// y además añade en otra posición tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

const array = ["J","A","C","K","C","A","N","T","O"]

const nombre = array.slice(0,1).join("").toUpperCase() + array.slice(1,4).join("").toLowerCase() // Utilizamos .slice() para extraer los elementos del array que quieres, y.join() para unificar esos elementos.
const apellido = array.slice(4,5).join("").toUpperCase() + array.slice(5,array.length).join("").toLowerCase()
array.unshift (30)


console.log(`My name is ${nombre} ${apellido} and I'm ${array[0]} yers old.`)


/*
const name = ["J", "O", "N", "S", "N", "O", "W"];

name.unshift("Jon"); //  el método  unshift()  se utiliza para agregar elementos al inicio de un array, 
                     // incluso si el array es una constante. Aunque la constante  name  está declarada, aún puedes utilizar  unshift()  para agregar elementos al array.
name.splice(3, 0, 40);
console.log(`My name is ${name[0]} and I'm ${name[3]} years old.`);

output: My name is Jon and I'm 40 years old. 

*/