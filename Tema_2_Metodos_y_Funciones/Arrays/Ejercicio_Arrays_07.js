// Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

// output: City added to array! => Jon, Snow, 40, New York



const array = ["J", "A", "C", "K", "C", "A", "N", "T", "O"];
array.unshift("Jack");
array.splice(3, 0, 36);

const addCity = (city) => {
    array.push(city);
    console.log(`My name is ${array[0]} and I'm ${array[3]} years old. I live in ${city}.`);
    
}

addCity("Alicante");