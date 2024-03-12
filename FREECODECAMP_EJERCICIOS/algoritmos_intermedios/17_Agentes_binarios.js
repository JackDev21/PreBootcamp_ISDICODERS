/*Agentes binarios
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios. */

// Definición de la función binaryAgent que toma una cadena binaria como entrada
function binaryAgent(str) {
  // Separar la cadena binaria en un array de cadenas, utilizando el espacio como separador
  str = str.split(" ");
  console.log(str); // Muestra en la consola el array de cadenas resultante

  // Inicialización de un array llamado "result" para almacenar los caracteres decodificados
  let result = [];

  // Recorrido del array de cadenas binarias
  for (let i = 0; i < str.length; i++) {
    // Convertir cada cadena binaria en un número entero utilizando parseInt(), 
    // especificando que la base numérica es 2 (binario)
    let decimalCharCode = parseInt(str[i], 2);

    // Convertir el número entero obtenido en el paso anterior en el carácter correspondiente
    // utilizando String.fromCharCode(), y luego agregarlo al array "result"
    result.push(String.fromCharCode(decimalCharCode));
  }

  // Mostrar en la consola la cadena de texto resultante, uniendo todos los caracteres decodificados
  console.log(result.join(""));

  // Devolver la cadena de texto resultante
  return result.join("");
}

// Llamar a la función binaryAgent con una cadena binaria como argumento
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
