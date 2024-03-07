/* Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.  */

// Definimos una función llamada 'mutation' que toma un array 'arr' como argumento
function mutation(arr) {
  // Convertimos la segunda palabra del array a minúsculas y la asignamos a la variable 'test'
  const test = arr[1].toLowerCase();
  // Convertimos la primera palabra del array a minúsculas y la asignamos a la variable 'target'
  const target = arr[0].toLowerCase();

  // Iteramos sobre cada letra de la palabra 'test'
  for (let i = 0; i < test.length; i++) {
    // Imprimimos en la consola la letra actual de 'test' para verificar
    console.log("Letra de 'test':", test[i]);

    // Verificamos si la letra actual de 'test' está presente en 'target'
    if (target.indexOf(test[i]) < 0) {
      // Si la letra no está presente en 'target', imprimimos un mensaje y retornamos 'false'
      console.log("Letra no encontrada en 'target'");
      return false;
    }
  }
  // Si todas las letras de 'test' están presentes en 'target', retornamos 'true'
  return true;
}

// Llamamos a la función 'mutation' con el array ["hello", "hey"] y mostramos el resultado en la consola
console.log("Resultado de mutation:", mutation(["hello", "hey"]));
