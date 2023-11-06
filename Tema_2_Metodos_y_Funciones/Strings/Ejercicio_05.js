// Ahora, de tu nombre completo reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

const nombre = "Jack"
const apellido = "Cantó"

const nombrecompleto = `${nombre} ${apellido}`

console.log(nombrecompleto)

const reemplazonombre = nombrecompleto.replace(nombre, "Mr")
console.log(reemplazonombre)