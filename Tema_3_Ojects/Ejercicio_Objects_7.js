// Cambia la propiedad name por fullName

const character = {
    name: "Jon",  
    family: "Snow",  
    id: 1,  
};

character.fullName = character.name;  // Asigna el valor de 'name' a 'fullName'
delete character.name;  // Elimina la propiedad 'name' del objeto 'character'

console.log(character);  