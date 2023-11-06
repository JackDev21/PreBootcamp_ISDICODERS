const name = ["J", "O", "N", "S", "N", "O", "W"];

const addCity = (city) => {
  name.push(city);
  console.log(`City added to array! => ${name.join(", ")}`);
};

console.log(addCity("New York"));
// output: City added to array! => Jon, Snow, 40, New York


const deleteCity = () => {
  name.pop();
  console.log("City deleted! => " + name.join(", "));
};

console.log(addCity("New York")); // output: City added to array! => Jon, Snow, 40, New York
console.log(deleteCity()); // output: City deleted! => Jon, Snow, 40