/* Spinal case
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones. */

function spinalCase(str) {
  // Reemplazamos los espacios y los guiones bajos por guiones
  // Luego, usamos una expresión regular para buscar transiciones entre mayúsculas y minúsculas o entre caracteres y dígitos
  // Finalmente, convertimos todo a minúsculas
  return str.replace(/\s+|_+/g, "-").replace(/([a-z])([A-Z]|[0-9])/g, "$1-$2").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("thisIsSpinalTap"))