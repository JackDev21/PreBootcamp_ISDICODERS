/*Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML. */


function convertHTML(str) {

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "&") {
      str = str.replace("&", "&amp;");
    }
    if (str[i] === "<") {
      str = str.replace("<", "&lt;");
    }
    if (str[i] === ">") {
      str = str.replace(">", "&gt;");
    }
    if (str[i] === '"') {
      str = str.replace('"', "&quot;");
    }
    if (str[i] === "'") {
      str = str.replace("'", "&apos;");
    }
  }


  return str;
}

console.log(convertHTML("Dolce & Gabbana"));