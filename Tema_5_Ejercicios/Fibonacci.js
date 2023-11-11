
const fibonacciSeries = (fibonacciSequenceLength) => { // Declaramos funcion llamada fibonacciSeries, con un parámetro.
    let n0 = 0; // Declaramos variable con valor 0, para primer elemento de la serie.
    let n1 = 1; // Declaramos variable con valor 1, para segundo elemento de la serie, ya que necesita ser sumado con el anterior.
    for (let i = 0; i < fibonacciSequenceLength; i++) { // Bucle for que se ejecuta mientras i sea menor que fibonacciSequenceLength, se inicia en 0 y se incrementa en 1 en cada iteración.
        console.log(n0); // Imprimimos el valor de n0.
        let n2 = n0 + n1; // Se hace la suma y se almacena en la variable n2.
        n0 = n1; // Se actualiza la variable n0 con el valor de n1.
        n1 = n2; // Se actualiza la variable n1 con el valor de n2.
    }
}

fibonacciSeries(10)