// Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

// output: City added to array! => Jon, Snow, 25, New York.

const array = ["J","A","C","K","C","A","N","T","O"]

const nombre = array.slice(0,1).join("").toUpperCase() + array.slice(1,4).join("").toLowerCase() // Utilizamos .slice() para extraer los elementos del array que quieres, y.join() para unificar esos elementos.
const apellido = array.slice(4,5).join("").toUpperCase() + array.slice(5,array.length).join("").toLowerCase()
array.unshift (30)

const addCity = (city) => { // Creamos funcion arrow
    array.push(city); // Se añade al array city
    console.log(`City added to array! => ${nombre}, ${apellido}, ${array[0]}, ${city}`); // Formateo del print.
}

addCity("Alicante") // A la funcion le decimos la ciduad que queremos añadir.