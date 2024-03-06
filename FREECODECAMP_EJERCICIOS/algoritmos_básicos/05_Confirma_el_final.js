/*Confirma el final

Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target). 
Este desafío puede resolverse con el método .endsWith (),
que fue introducido en ES2015. Pero para el propósito de este desafío,
nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar. */

function confirmEnding(str, target) {

  let endOfStr = str.substring(str.length - target.length);

  return endOfStr === target;
}

confirmEnding("Bastian", "n");