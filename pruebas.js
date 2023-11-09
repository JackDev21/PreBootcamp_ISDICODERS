const character = {  
  name: "Jon", // Definimos la propiedad "name" con el valor "Jon"
  family: "Snow", // Definimos la propiedad "family" con el valor "Snow"
  id: 1, // Definimos la propiedad "id" con el valor 1
};

const listPropertyValues = (character) => {
  for (let characterData in character) {
    console.log(character[characterData]);
  }
};

console.log(listPropertyValues(character)); // output: Jon, Snow, 01