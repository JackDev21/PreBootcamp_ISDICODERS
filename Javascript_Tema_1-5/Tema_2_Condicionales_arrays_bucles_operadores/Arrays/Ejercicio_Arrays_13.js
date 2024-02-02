// Podrías mostrarlos en el orden inverso? 

// Definimos un array de números del 0 al 10
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definimos un multiplicador con el valor de 3
const multiplicador = 3;

// Utilizamos el método map() en el array "numeros" para crear un nuevo array
// donde cada número es multiplicado por el valor del multiplicador
const funcion = numeros.map((numero) => numero * multiplicador);

// Utilizamos el método sort() para ordenar los elementos del array en orden inverso
// La función de comparación (numeroMenor, numeroMayor) => numeroMayor - numeroMenor
// ordena los elementos de mayor a menor, invirtiendo el orden
funcion.sort((numeroMenor, numeroMayor) => numeroMayor - numeroMenor);

// Mostramos el resultado en la consola
console.log(funcion);