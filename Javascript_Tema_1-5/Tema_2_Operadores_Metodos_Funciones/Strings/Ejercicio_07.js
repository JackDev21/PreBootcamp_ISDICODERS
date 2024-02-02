// Crea dos arrays, uno con varios nombres y otro con varios apellidos. Genera un nombre aleatorio seleccionando un elemento al azar de cada array. 
// Convierte el nombre y apellido a camelCase y únelos para formar el nombre completo. Muestra el resultado por consola.


const nombres = ["Jose", "Lorena", "María", "Paco"]
const apellidos = ["López", "Cantó", "García", "Ribera"]

// En el array (lista) "nombres" utilizamos Math.random() para generar un numero aleatorio, y con Math.floor redondea hacia abajo, generando un indice 
// aleatorio y multiplicando  el numero por la longituod (length) del array.
const nombrerandom = nombres[Math.floor(Math.random() * nombres.length)] 
console.log(nombrerandom)

const apellidorandom = apellidos[Math.floor(Math.random() * apellidos.length)]
console.log(apellidorandom)

const nombreApellidorandom = `${nombrerandom} ${apellidorandom}`
console.log (nombreApellidorandom.toLocaleLowerCase())