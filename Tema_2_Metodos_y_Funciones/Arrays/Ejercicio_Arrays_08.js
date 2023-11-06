
const array = ["Jack","Canto",36]

const addCity = (city) => {
    array.push(city);
    console.log(`City added to array! : ${array.join(", ")}`);
};

console.log(addCity("Alicante"));