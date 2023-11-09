// Lista el numero de propiedades que contiene el objeto.

const character = {  
    name: "Jon", 
    family: "Snow", 
    id: 1, 
};

character.age = 25
character.family = "Lannister"
character.colorDePiel = "Moreno"


const propiedades = Object.keys(character)

console.log(propiedades)