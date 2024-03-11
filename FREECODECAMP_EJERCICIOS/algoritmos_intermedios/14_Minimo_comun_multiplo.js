/*Mínimo común múltiplo
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los 
números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.*/


function smallestCommons(arr) {
  // Ordenar el arreglo para tener los límites del rango
  arr.sort((a, b) => a - b);

  // Función para calcular el Máximo Común Divisor (MCD)
  function gcd(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Función para calcular el Mínimo Común Múltiplo (MCM) usando el MCD
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Comenzar con el menor número en el rango
  let multiple = arr[0];

  // Iterar sobre el rango y calcular el MCM acumulativo
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

console.log(smallestCommons([1, 3]));

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([10, 2]))