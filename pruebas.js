const name = ["J", "O", "N", "S", "N", "O", "W"];

const addCity = (city) => {
  name.push(city);
  console.log(`City added to array! => ${name.join(", ")}`);
};

console.log(addCity("New York"));