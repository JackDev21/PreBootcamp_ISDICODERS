/* Suma todos los números en un rango
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. 
El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10. */

const sumAll = (arr) => {

  let min;
  let max;
  let sum = 0

  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1]
  } else {
    min = arr[1]
    max = arr[0]
  }

  for (let i = min; i <= max; i++) {
    sum = sum + i
  }
  return sum

}



console.log(sumAll([1, 4]))
console.log(sumAll([5, 10]))