

const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(listaNumeros)

listaNumeros.push(16) // Push para agregar elemento al final de un array
console.log(listaNumeros)


const nuevaLista = listaNumeros.slice(11, 16) // Slice para seleccionar una subsección de elementos de un array
console.log(nuevaLista)

nuevaLista.pop() // Pop para eliminar elemento al final de un array
console.log(nuevaLista)

nuevaLista.unshift(10) // Unshift para agregar elemento al principio de un array
console.log(nuevaLista)

nuevaLista.shift() // Shift para eliminar elemento al principio de un array
console.log(nuevaLista)


const numeroEliminado = 12
nuevaLista.splice(nuevaLista.indexOf(numeroEliminado), 1); // eliminar un elemento seleccionado de un array
console.log(nuevaLista)


/*
1. `push()`: Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

2. `pop()`: Elimina el último elemento de un array y lo devuelve.

3. `unshift()`: Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

4. `shift()`: Elimina el primer elemento de un array y lo devuelve.

5. `concat()`: Combina dos o más arrays creando un nuevo array.

6. `splice()`: Permite agregar, eliminar o reemplazar elementos en posiciones específicas de un array.

7. `slice()`: Crea una copia superficial de una porción de un array en un nuevo array.

8. `filter()`: Crea un nuevo array que incluye todos los elementos que cumplen con un cierto criterio.

9. `map()`: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

10. `reduce()`: Reduce los elementos de un array a un solo valor mediante una función acumuladora.

11. `reduceRight()`: Similar a `reduce()`, pero procesa los elementos en orden inverso.

12. `find()`: Encuentra el primer elemento en el array que cumple con un cierto criterio y lo devuelve.

13. `findIndex()`: Encuentra el índice del primer elemento en el array que cumple con un cierto criterio.

14. `forEach()`: Ejecuta una función en cada elemento del array.

15. `some()`: Verifica si al menos un elemento cumple con un cierto criterio.

16. `every()`: Verifica si todos los elementos cumplen con un cierto criterio.

17. `sort()`: Ordena los elementos de un array alfabéticamente o según un criterio personalizado.

18. `reverse()`: Invierte el orden de los elementos en un array.

19. `includes()`: Verifica si un array incluye un determinado elemento.

20. `indexOf()`: Encuentra el índice de un elemento en un array.

21. `lastIndexOf()`: Encuentra el índice de un elemento en un array, desde la derecha.

22. `join()`: Convierte un array en una cadena de texto separada por un caracter.	

23. `toString()`: Convierte un array en una cadena de texto.

24. `valueOf()`: Convierte un array en un valor numérico.

25. `split()`: Divide una cadena de texto en un array de subcadenas. Utilizando un caracter como separador.

26. `concat()`: Combina dos o más arrays creando un nuevo array.

27 `replace()`: Reemplaza parte de una cadena de texto por otra cadena de texto.


Estos métodos son esenciales en la manipulación de arrays en JavaScript y te permiten realizar una variedad de operaciones en tus datos de manera efectiva. */ 