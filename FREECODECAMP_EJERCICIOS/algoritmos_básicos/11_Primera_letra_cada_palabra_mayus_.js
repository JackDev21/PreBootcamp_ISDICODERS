/* Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. */


function titleCase(str) {

  let strSplit = str.toLowerCase().split(" ")
  console.log(strSplit)

  for (let i = 0; i < strSplit.length; i++) {

    console.log(strSplit[i])

    strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1)

  }
  return strSplit.join(" ")

}

console.log(titleCase("I'm a little tea pot"));