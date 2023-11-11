// ¿Podrias hacer una función que mostrara por pantalla la serie Fibonacci? Crear una función llamada fibonacciSeries 
// que tome un número como parámetro (ejemplo: fibonacciSequenceLength) y devuelva un array con la serie de números 
// de Fibonacci hasta el número máximo de la serie recibido por parámetros. La serie de Fibonacci comienza con 0 y 1, y 
// cada término subsiguiente se calcula sumando los dos términos anteriores.



function fibonacciSeries(fibonacciSequenceLength) { // Declaramos funcion llamada fibonacciSeries, con un parámetro.
    const fibonacci = []; // Declaramos array vacío.
    for (let i = 0; i < fibonacciSequenceLength; i++) { // Bucle for que se ejecuta mientras i sea menor que fibonacciSequenceLength, se inicia en 0 y se incrementa en 1 en cada iteración.
        if (i < 2) { // Si i es menor que 2
        fibonacci.push(i); // Se agrega 0 y 1 al array.
        } else { // Si i no es menor que 2
        const siguienteNum = fibonacci[i - 1] + fibonacci[i - 2]; // Se hace la suma y se almacena en la variable siguienteNum.
        fibonacci.push(siguienteNum); // Se agrega siguienteNum al array.
        }
    }
    return fibonacci;
}

console.log(fibonacciSeries(10));
