/*Aplanadora
Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación. */

function steamrollArray(arr) {

  let aplanado = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      aplanado = aplanado.concat(steamrollArray(arr[i]));
    } else {
      aplanado.push(arr[i]);
    }
  }

  return aplanado;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));