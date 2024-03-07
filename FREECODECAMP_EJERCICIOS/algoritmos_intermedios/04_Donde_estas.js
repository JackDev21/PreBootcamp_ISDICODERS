/*Donde estás
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y 
valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a 
incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su
 valor, el cual fue pasado como segundo argumento.  */


// Definición de la función whatIsInAName que toma dos argumentos: collection y source.
function whatIsInAName(collection, source) {
  // Se crea un array vacío llamado collectionfound donde se almacenarán los elementos encontrados.
  const collectionfound = [];

  // Se imprime en la consola la colección de entrada.
  console.log(collection);

  // Bucle for que recorre cada elemento de la colección.
  for (let i = 0; i < collection.length; i++) {
    // Se imprime en la consola el elemento actual de la colección.
    console.log(collection[i]);

    // Variable booleana que se utilizará para verificar si hay coincidencia entre el elemento actual y el objeto source.
    let isMatch = true;

    // Bucle for...in que recorre cada propiedad del objeto source.
    for (key in source) {
      // Se imprime en la consola el objeto source.
      console.log(source);

      // Se verifica si la propiedad actual de source coincide con la misma propiedad en el elemento actual de la colección.
      if (collection[i][key] !== source[key]) {
        // Si no hay coincidencia, se cambia el valor de isMatch a false.
        isMatch = false;
      }
    }

    // Después de verificar todas las propiedades de source en el elemento actual de la colección,
    // si isMatch sigue siendo true, significa que todas las propiedades coinciden.
    if (isMatch) {
      // En ese caso, se agrega el elemento actual a la colección de elementos encontrados.
      collectionfound.push(collection[i]);
    }
  }

  // Se imprime en la consola la colección de elementos encontrados.
  console.log(collectionfound);

  // Se devuelve la colección de elementos encontrados.
  return collectionfound;
}

// Se llama a la función whatIsInAName con una colección y un objeto source específicos.
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
