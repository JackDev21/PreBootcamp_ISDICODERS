/*Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined. */

function fearNotLetter(str) {
  // Definimos una cadena constante que contiene el alfabeto completo.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // Obtenemos la longitud de la cadena proporcionada.
  const len = str.length;
  console.log(len)
  // Obtenemos el índice de la primera letra de la cadena proporcionada en el alfabeto.
  const start = alphabet.indexOf(str[0]);
  console.log(start)

  // Iniciamos un bucle que recorre el alfabeto desde la posición de la primera letra de la cadena.
  // Este bucle continuará hasta llegar a la posición de la última letra de la cadena.
  for (let i = start; i < start + len; i++) {
    // Verificamos si la letra actual del alfabeto no está incluida en la cadena proporcionada.
    if (!str.includes(alphabet[i])) {
      // Si la letra actual no está en la cadena proporcionada, significa que es la letra faltante.
      // Devolvemos esta letra faltante.
      return alphabet[i];
    }
  }
  // Si no se encuentra ninguna letra faltante, devolvemos undefined.
  return undefined;
}

// Ejemplo de uso de la función
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"))
