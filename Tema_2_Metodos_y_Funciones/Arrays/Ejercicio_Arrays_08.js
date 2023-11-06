// Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
const array = ["Jack","Canto",36]

const addCity = (city) => {
    array.push(city);
    console.log(`City added to array! : ${array.join(", ")}`);
};




const deleteCity = () =>{
    array.pop();
    console.log("Citiy deleted! : " + array.join(", "))

}

console.log(addCity("Alicante"));
console.log(deleteCity());