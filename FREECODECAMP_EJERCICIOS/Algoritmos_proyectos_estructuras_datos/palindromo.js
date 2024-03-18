/* Comprobador de palíndromos
Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2. */

function palindrome(str) {
  // Eliminar espacios en blanco y convertir a minúsculas
  const palabra = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // con regex eliminamos todos los caracteres que no sean letras o números y convertimos todo a minúsculas
  console.log(processedStr); // Mostrar la cadena procesada en la consola

  // Invertir la cadena procesada
  const palabraInvertida = processedStr.split('').reverse().join('');
  console.log(reversedStr); // Mostrar la cadena invertida en la consola

  // Verificar si la cadena procesada es igual a su versión invertida
  return palabra === palabraInvertida;
}

console.log(palindrome("_eye"));
