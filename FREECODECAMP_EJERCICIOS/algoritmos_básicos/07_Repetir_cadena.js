/* Repite una cadena repite una cadena

Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat(). */

function repeatStringNumTimes(str, num) {

  if (num < 0) {
    return "";
  }

  let repeatStr = ""
  for (let i = 0; i < num; i++) {
    repeatStr += str
  }

  return repeatStr;
}



console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3))