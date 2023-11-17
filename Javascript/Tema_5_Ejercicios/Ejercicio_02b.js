// Ahora, muestra los resultados en forma piramidal

const fibonacciSeries = (fibonacciSequenceLength) => {
  // Comenzamos la secuencia de Fibonacci con los primeros dos números
    let resultado = [0, 1];

  // Luego generamos los demás números de la secuencia hasta la longitud deseada
    for (let posicionFibonacci = 2; posicionFibonacci < fibonacciSequenceLength; posicionFibonacci++) {
    // Cada número de la secuencia de Fibonacci es la suma de los dos números anteriores
    const numero = resultado[posicionFibonacci - 1] + resultado[posicionFibonacci - 2];
    resultado.push(numero);
    }

  // Devolvemos la secuencia completa de Fibonacci
    return resultado;
};
const getPyramidalFibonacci = (numero) => {
  // Primero generamos la secuencia de Fibonacci hasta el número dado
    const fibonacciSequence = fibonacciSeries(numero); // Llamamos a la funcion

    // Primero, la parte superior de la pirámide
  // Luego, para cada número en la secuencia de Fibonacci...
    for (let fila = 0; fila < numero; fila++) {
    // Comenzamos una nueva línea de la pirámide
    let line = "";

    // Y agregamos a la línea cada número de la secuencia de Fibonacci hasta el número actual
    for (let columna = 0; columna <= fila; columna++) {
        line += fibonacciSequence[columna] + " ";
        }
    console.log(line)
    }
    // Luego, la parte inferior de la pirámide
    for (let fila = numero - 2; fila >= 0; fila--) {
        let line =""
        for ( let columna = 0; columna <= fila; columna++) {
            line = line + fibonacciSequence[columna] + " ";
        }
    console.log(line)
    }
};
getPyramidalFibonacci(8);
