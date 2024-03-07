/*Rebote falsy
Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano. */


function bouncer(arr) {

  let arrFilter = []
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])

    if (arr[i]) {
      arrFilter.push(arr[i])

    }
  }

  return arrFilter;
}

console.log(bouncer([7, "ate", "", false, 9]));


/*function bouncer(arr) {
  return arr.filter(Boolean); // Filtra y mantiene solo los valores truthy
}

Ejemplo de uso:
console.log(bouncer([7, "ate", "", false, 9]));  //Debería imprimir [7, "ate", 9] */