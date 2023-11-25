// Imprime por consola solo tu apellido a partir de tu nombre completo con un Hello.



const fullname = "Jose Cantó"
const spaceindex = fullname.indexOf(" ")

const lastname = fullname.slice(spaceindex + 1 )
const saludo = `Hola ${lastname}`
console.log(saludo)