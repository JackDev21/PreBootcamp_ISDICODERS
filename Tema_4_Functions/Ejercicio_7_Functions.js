// Intenta englobar tus funciones de preguntar tu nombre y calcular tu edad en una única función. Las funciones en una sola función padre, 
// el return de dicha función padre deberá ser la llamada a las funciónes hijas. El resultado de la función getRandomNumber será el argumento
// que se recogerá como parámetro en la función calculateMyAge()


const getRandomNumber = () => {
    const maxNum = 2051; // Definimos el número máximo para el rango
    const minNum = 1900; // Definimos el número mínimo para el rango
    return Math.floor(Math.random() *  (maxNum - minNum)) + minNum // Generamos un número aleatorio entre el mínimo y máximo y lo retornamos
}

const getmyName = (myName) => {
    return myName; // Retornamos el nombre que se pasa como argumento
}



const calculateMyAge = (añoNacimiento) =>{
    const añoActual = new Date().getFullYear(); // Obtenemos el año actual
    const age = añoActual - añoNacimiento; // Calculamos la edad restando el año de nacimiento del año actual
    return `Tengo ${age} años.`; // Retornamos una cadena de texto que indica la edad
}

const datosPersonal = (datosNombre) => {
    const name = getmyName(datosNombre); // Obtenemos el nombre utilizando la función getmyName
    const randomYear = getRandomNumber(); // Obtenemos un año aleatorio utilizando la función getRandomNumber
    const age = calculateMyAge(randomYear); // Calculamos la edad utilizando la función calculateMyAge
    return `${name} ${age}`; // Retornamos una cadena de texto que combina el nombre y la edad
}

const name = "Jack"; // Declaramos la variable name y le asignamos el valor "Jack"

console.log(datosPersonal(name)); // Llamamos a la función datosPersonal con el nombre como argumento y mostramos el resultado en la consola