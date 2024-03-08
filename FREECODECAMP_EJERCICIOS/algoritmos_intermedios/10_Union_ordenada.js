/*Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos. */


/*function uniteUnique(...arrays) {

  let newArr = []

  arrays.forEach(array => {
    array.forEach(num => {
      if (!newArr.includes(num)) {
        newArr.push(num)

      }
    })
  })

  return newArr
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

*/

function uniteUnique(...arrays) {
  // Creamos un nuevo arreglo para almacenar los valores únicos
  let newArr = [];

  // Iteramos sobre cada arreglo proporcionado
  for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i])

    // Iteramos sobre cada elemento del arreglo actual
    for (let j = 0; j < arrays[i].length; j++) {
      console.log(arrays[i][j])
      // Verificamos si el valor ya existe en el arreglo newArr
      if (newArr.indexOf(arrays[i][j]) === -1) {
        // Si no existe, lo agregamos al arreglo newArr
        newArr.push(arrays[i][j]);
      }
    }
  }

  // Retornamos el arreglo de valores únicos en orden original
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // Output esperado: [1, 3, 2, 5, 4]
