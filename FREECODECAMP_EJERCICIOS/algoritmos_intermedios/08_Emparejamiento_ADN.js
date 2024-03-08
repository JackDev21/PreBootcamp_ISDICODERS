/* Emparejamiento de ADN
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. 
Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado. */


function pairElement(str) {
  const adn = {
    G: ["G", "C"],
    C: ["C", "G"],
    A: ["A", "T"],
    T: ["T", "A"]
  }

  const fullAdn = []

  for (let i = 0; i < str.length; i++) {
    fullAdn.push(adn[str[i]])
  }

  return fullAdn;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"))
console.log(pairElement("CTCTA"))