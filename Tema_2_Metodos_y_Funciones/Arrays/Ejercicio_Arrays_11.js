// Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

const numeros = [0,1,2,3,4,5,6,7,8,9,10]

const multiplicado = numeros.map(numeros => numeros * 2); // map sirve para recorrer cada elemento del array parecido al bucle for.

console.log (multiplicado);


//En resumen, si solo necesitas iterar sobre un array y realizar operaciones en cada elemento, puedes utilizar un bucle  for . 
// Pero si deseas transformar cada elemento de un array y crear un nuevo array con los resultados, el método  map()  es una opción más conveniente y legible.