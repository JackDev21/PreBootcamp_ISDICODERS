/* Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.  */

// Definimos una función llamada 'chunkArrayInGroups' que toma un arreglo 'arr' y un tamaño 'size' como argumentos
function chunkArrayInGroups(arr, size) {
  // Creamos un nuevo arreglo para almacenar los grupos
  const newArr = [];

  // Mientras el arreglo 'arr' tenga elementos
  while (arr.length > 0) {
    // Extraemos un grupo del arreglo 'arr' con la longitud especificada por 'size' y lo añadimos al nuevo arreglo 'newArr'
    newArr.push(arr.splice(0, size));

    // Imprimimos en la consola el nuevo arreglo en cada iteración para depurar y visualizar el proceso
    console.log("Nuevo arreglo:", newArr);
  }

  // Retornamos el nuevo arreglo bidimensional
  return newArr;
}

// Llamamos a la función 'chunkArrayInGroups' con un ejemplo de arreglo y tamaño
chunkArrayInGroups(["a", "b", "c", "d"], 2);
