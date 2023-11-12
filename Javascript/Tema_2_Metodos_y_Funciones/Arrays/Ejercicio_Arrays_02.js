// Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

const nombre = ["J","A","C","K","C","A","N","T","O"]
const caracter = "|"

const apellido = nombre.slice(4,nombre.length).join("|")
console.log(apellido)