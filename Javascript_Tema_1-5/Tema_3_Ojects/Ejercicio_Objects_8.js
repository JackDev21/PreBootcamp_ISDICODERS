// Lista todas las propiedades del objeto a través de un console.log()

const character = {
    name: "Jon",  
    family: "Snow",  
    id: 1,  
};

character.fullName = character.name;  // Asigna el valor de 'name' a 'fullName'
delete character.name;  // Elimina la propiedad 'name' del objeto 'character'
character.age = 36
character.family = "Lannister"

console.log(`Hola mi nombre es ${character.fullName} de la familia ${character.family} y tengo ${character.age} años.`);  