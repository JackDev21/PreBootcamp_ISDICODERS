/*Busca y destruye
Se te proporcionará un arreglo inicial como primer argumento de la función destroyer, seguido de uno o más argumentos. 
Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

La function debe aceptar un número indeterminado de argumentos, también conocida como función variádica. Puedes acceder a los argumentos
adicionales añadiendo un parámetro restante a la definición de la función o utilizando el objeto arguments. */

// La función destroyer toma un arreglo 'arr' y un número indeterminado de argumentos 'args'
function destroyer(arr, ...args) {
  // Utilizamos el método filter() en el arreglo 'arr' 
  // para filtrar y devolver solo los elementos que no están incluidos en 'args'
  return arr.filter(item => !args.includes(item));
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);