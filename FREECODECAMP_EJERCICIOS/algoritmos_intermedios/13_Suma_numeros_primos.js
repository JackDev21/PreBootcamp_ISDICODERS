/*Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. 
Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.  */

function sumPrimes(num) {
  let numPrimos = [];

  // Función auxiliar para verificar si un número es primo
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return number;
  }

  // Revisar todos los números desde 2 hasta num
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      numPrimos.push(i); // Añade el número primo al arreglo
    }
  }

  // Sumar todos los números primos encontrados
  return numPrimos.reduce((acc, val) => acc + val, 0);
}

console.log(sumPrimes(10)); // Debería imprimir 17, ya que los números primos menores o iguales a 10 son 2, 3, 5 y 7.