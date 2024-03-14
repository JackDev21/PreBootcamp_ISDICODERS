/*Cifrado César
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. 
En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos. */

function rot13(str) {
  // Paso 1: Definir una función de reemplazo para la expresión regular
  // Esta función toma cada letra coincidente como argumento y realiza el desplazamiento ROT13
  const replaceLetter = (Letter) => {
    // Paso 2: Obtener el código ASCII de la letra actual
    const ascii = Letter.charCodeAt(0);

    // Paso 3: Verificar si el código ASCII está dentro del rango de letras mayúsculas (65 - 90)
    if (ascii >= 65 && ascii <= 90) {
      // Paso 4: Aplicar el desplazamiento ROT13 solo a las letras mayúsculas
      // Calcular el nuevo código ASCII después de desplazar 13 lugares en el alfabeto
      const newAscii = ((ascii - 65 + 13) % 26) + 65;
      // Paso 5: Convertir el nuevo código ASCII a su carácter correspondiente
      return String.fromCharCode(newAscii);
    } else {
      // Paso 6: Devolver cualquier carácter no alfabético sin cambios
      return Letter;
    }
  };

  // Paso 7: Utilizar la función de reemplazo en la cadena utilizando una expresión regular
  // La expresión regular /[A-Z]/g coincide con todas las letras mayúsculas en la cadena
  // Y para cada coincidencia, se llama a la función replaceLetter para realizar el reemplazo
  let decodedStr = str.replace(/[A-Z]/g, replaceLetter);

  // Paso 8: Imprimir la cadena decodificada en la consola
  console.log(decodedStr);

  // Paso 9: Devolver la cadena decodificada
  return decodedStr;
}

// Ejemplo de uso
rot13("SERR PBQR PNZC");
