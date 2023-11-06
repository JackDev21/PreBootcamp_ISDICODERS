
const array = ["J","A","C","K","C","A","N","T","O"]

const addCity = (city) => {
    array.push(city);
    console.log(`City added to array! : ${array.join(", ")}`);
};



const deleteCity = () => {
    array.pop();
    console.log("City deleted! => " + array.join(", "));
};

console.log(addCity("Alicante")); 
console.log(deleteCity());