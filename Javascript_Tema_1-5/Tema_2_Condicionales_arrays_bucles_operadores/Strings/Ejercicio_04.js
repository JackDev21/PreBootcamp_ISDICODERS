// Ahora, con tu apellido y nombre en la misma variable, muestra solo el apellido:


const fullname = "Jose Cantó"
const spaceindex = fullname.indexOf(" ")

const lastname = fullname.slice(spaceindex + 1 )
console.log(`Mi apellido es ${lastname}.`)