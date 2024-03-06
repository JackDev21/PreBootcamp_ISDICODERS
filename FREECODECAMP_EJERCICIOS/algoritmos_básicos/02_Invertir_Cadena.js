/*Invierte una cadena
Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, "hello" debe convertirse "olleh". */

function reverseString(str) {

  str = str.split("").reverse().join("");
  return str;
}

console.log(reverseString("hello"))