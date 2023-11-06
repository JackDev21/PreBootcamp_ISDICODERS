// Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.


const array = ["Jack","Canto",36]

const addCity = (city) => {
    array.push(city); // Utilizamos push para agregar elemento al final de un array
    console.log(`City added to array! : ${array.join(", ")}`); // Añadimos join para 
};

console.log(addCity("Alicante"));