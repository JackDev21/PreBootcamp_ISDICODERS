/* Comprobador de palíndromos
Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2. */

function palindrome(str) {
  // Convertimos la cadena a minúsculas y eliminamos los espacios en blanco al principio y al final
  // Luego, reemplazamos todos los caracteres que no sean letras ni números por una cadena vacía
  str = str.replace(/[^a-z0-9]/gi, '').trim().toLowerCase();
  console.log(str); // Imprimimos la cadena resultante después de los cambios

  // Iteramos a través de la mitad de la longitud de la cadena
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // Imprimimos cada carácter de la cadena para propósitos de depuración

    // Verificamos si el carácter actual no es igual al carácter simétrico en la otra mitad de la cadena
    if (str[i] !== str[str.length - 1 - i]) {
      // Si no son iguales, devolvemos false, ya que no es un palíndromo

      return false;
    }
  }

  // Si hemos recorrido toda la cadena y no hemos encontrado ninguna diferencia,
  // entonces la cadena es un palíndromo, por lo que devolvemos true
  return true;
}

console.log(palindrome("eye")); // Probamos la función con la cadena "eye" y mostramos el resultado en la consola
