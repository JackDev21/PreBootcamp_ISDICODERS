// Ahora, muestra los resultados en forma piramidal:

function fibonacciSeries(fibonacciSequenceLength) { // Declaramos funcion fibonacciSeries con parametro fibonacciSequenceLength
    const fibonacci = [{ // Declaramos array fibonacci con dos elementos ya definidos
        posicion: 0, value: 0
    }, {
        posicion: 1, value: 1
    }];

    for (let i = 2; i < fibonacciSequenceLength; i++) { // Utilizamos bucle for para iterar mientras i sea menor que fibonacciSequenceLength, se inicia en 2 y se incrementa en 1 en cada iteración.
        const siguienteNum = fibonacci[i - 1].value + fibonacci[i - 2].value; // Almacenamos en la variable siguienteNum la suma de los dos elementos anteriores. 
        // Esto se hace porque la serie de Fibonacci comienza con 0 y 1, y cada término subsiguiente se calcula sumando los dos términos anteriores.
        fibonacci.push({ posicion: i, value: siguienteNum });
    }

    return fibonacci;
}

console.log(fibonacciSeries(10));

const getPyramidalFibonacci = (number) => {
    

};
