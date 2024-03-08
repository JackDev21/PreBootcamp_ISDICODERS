/* Busca y reemplaza
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si 
quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog */


function myReplace(str, before, after) {


  str = str.split(" ")
  console.log(str)

  for (let i = 0; i < str.length; i++) {
    console.log(str[i])

    if (str[i][0] === before[0].toUpperCase()) {
      str[i] = after[0].toUpperCase() + after.slice(1)
    } else if (str[i] === before) {
      str[i] = after.toLowerCase()
    }

  }

  return str.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"))