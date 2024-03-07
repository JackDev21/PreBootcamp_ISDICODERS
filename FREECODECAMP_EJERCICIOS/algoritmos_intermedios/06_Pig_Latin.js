/* Pig Latin (Latin de los cerdos)
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas. */
function translatePigLatin(str) {
  if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') {
    // Si la palabra comienza con una vocal, añadimos "way" al final y retornamos
    return str + 'way';
  } else {
    // Si la palabra comienza con una consonante
    // Encontramos el índice de la primera vocal
    let vowelIndex = -1;
    for (let i = 0; i < str.length && vowelIndex === -1; i++) {
      if ('aeiou'.includes(str[i])) {
        vowelIndex = i;
      }
    }

    if (vowelIndex === -1) {
      // Si no se encontraron vocales, simplemente añadimos "ay" al final
      return str + 'ay';
    }

    // Tomamos el substring desde la primera vocal hasta el final de la palabra
    const consonantCluster = str.slice(0, vowelIndex);

    // Tomamos el substring desde la primera vocal hasta el final de la palabra
    const remainingString = str.slice(vowelIndex);

    // Formamos la palabra en Pig Latin moviendo el grupo de consonantes al final y añadiendo "ay"
    return remainingString + consonantCluster + 'ay';
  }
}

console.log(translatePigLatin("eigth"));    // Salida esperada: "eigthway"
console.log(translatePigLatin("consonant")); // Salida esperada: "onsonantcay"
console.log(translatePigLatin("rhythm"));    // Salida esperada: "rhythmay"
