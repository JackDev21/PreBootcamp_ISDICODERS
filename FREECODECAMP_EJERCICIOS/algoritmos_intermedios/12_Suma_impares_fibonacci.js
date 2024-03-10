/*Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

Los dos primeros números de la sucesión de Fibonacci son el 0 y el 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los siete primeros números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5. */


function sumFibs(num) {
  let fibPrev = 0;
  let fibCurr = 1;
  let sum = 0;

  // Mientras el número actual de Fibonacci sea menor o igual a num
  while (fibCurr <= num) {
    // Si el número actual de Fibonacci es impar, lo sumamos
    if (fibCurr % 2 !== 0) {
      sum = sum + fibCurr;
      console.log(sum)

    }

    // Calculamos el siguiente número de Fibonacci
    let fibNext = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = fibNext;
  }

  return sum;
}

console.log(sumFibs(10)); // Output esperado: 10 (1 + 1 + 3 + 5)
