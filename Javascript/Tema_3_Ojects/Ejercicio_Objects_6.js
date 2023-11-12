// Lista el numero de propiedades que contiene el objeto.

// Se declara una constante llamada "character" que es un objeto.
const character = {  
    name: "Jon", 
    family: "Snow", 
    id: 1, 
};

// Se agrega una nueva propiedad "age" al objeto "character" con el valor 25.
character.age = 25

// Se actualiza la propiedad "family" del objeto "character" con el valor "Lannister".
character.family = "Lannister"

// Se agrega una nueva propiedad "colorDePiel" al objeto "character" con el valor "Moreno".
character.colorDePiel = "Moreno"

// Se obtiene un array de las propiedades del objeto "character" utilizando el método "Object.keys()".
const propiedades = Object.keys(character)

// Se muestra en la consola el array de propiedades del objeto "character".
console.log(propiedades)