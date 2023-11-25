// Ahora, crea una función que liste solo los valores de las propiedades.




const character = {  
    name: "Jon", // Definimos la propiedad "name" con el valor "Jon"
    family: "Snow", // Definimos la propiedad "family" con el valor "Snow"
    id: 1, // Definimos la propiedad "id" con el valor 1
};

const listaValor = (character) => { // Se define una función llamada "listaValor" que recibe como argumento el objeto "character"
    for (valor in character) { // se utiliza un bucle "for...in" para recorrer cada propiedad del objeto. En cada iteración 
        console.log(character[valor]); //se imprime el valor de la propiedad en la consola utilizando la sintaxis "character[valor]". Esto permite acceder al valor de cada propiedad del objeto.
    }
}

console.log(listaValor(character)); // Llamamos a la función "listaValor" pasando el objeto "character" como argumento y mostramos el resultado en la consola