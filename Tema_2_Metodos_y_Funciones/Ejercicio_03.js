// Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):

const fullname = "Jose Canto"
const spaceindex = fullname.indexOf(" ") // Aqui buscamos el indice que empieza en el (espacio) " ", es decir entre el nombre y el apellido.
const name = fullname.slice(0, spaceindex) // Con slice extraemos una parte de una cadena de texto, array o un objeto. Especificando el inicio y el fin del indice.

console.log(`My name is ${name}.`) 


