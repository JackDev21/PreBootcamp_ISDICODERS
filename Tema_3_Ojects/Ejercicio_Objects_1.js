// Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)const character = {

const character = {  
    name: "Jon", // Definimos la propiedad "name" con el valor "Jon"
    family: "Snow", // Definimos la propiedad "family" con el valor "Snow"
    id: 1, // Definimos la propiedad "id" con el valor 1
};

const listarNombres = (character) => { // Creamos una funcion arrow con la constante listarNombres dando el argumento de character
    for (let propiedad in character) { // Recorremos cada propiedad en el objeto "character"
        console.log(propiedad); // Imprimimos el nombre de cada propiedad en la consola
    }
};

console.log(listarNombres(character)); // Llamamos a la función "listarNombres" pasando el objeto "character" como argumento y mostramos el resultado en la consola