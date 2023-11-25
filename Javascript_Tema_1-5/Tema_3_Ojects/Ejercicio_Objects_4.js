// Ahora, elimina la propiedad ID y asegura los cambios.

const character = {  
    name: "Jon", 
    family: "Snow", 
    id: 1, 
};

delete character.id // con delete elminamos la propiedad de character que se elija.

console.log(character)