/* Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. 
En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden. */


/*function diffArray(arr1, arr2) {
  const newArr = [];

  // Busca elementos en arr1 que no estén en arr2
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);

    }
  }

  // Busca elementos en arr2 que no estén en arr1
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); */


function diffArray(arr1, arr2) {

  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))

}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));