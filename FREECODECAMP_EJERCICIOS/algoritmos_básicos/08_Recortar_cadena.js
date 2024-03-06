/* Recorta una cadena
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
Devuelve la cadena recortada con un ... al final. */



function truncateString(str, num) {

  if (str.length > num) {

    str = str.slice(0, num) + "..."
  }

  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));