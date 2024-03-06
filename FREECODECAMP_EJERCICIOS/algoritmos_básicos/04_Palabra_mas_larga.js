/*Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número. */

function findLongestWordLength(str) {

  str = str.split(" ");
  console.log(str)

  let max = 0;

  for (let i = 0; i < str.length; i++) {

    if (str[i].length > max) {
      max = str[i].length
    }
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");