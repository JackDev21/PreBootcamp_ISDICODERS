const name = ["J", "O", "N", "S", "N", "O", "W"];
name.unshift("Jon");
name.splice(3, 0, 40);

const addCity = (city) => {
  name.push(city);
  return `City added to array! => ${name[0]}, ${name[1]}, ${name[2]}, ${city}`;
}

const deleteCity = () => {
  const deletedCity = name.pop();
  return `City deleted! => ${name[0]}, ${name[1]}, ${name[2]}`;
}

console.log(addCity("New York"));
console.log(deleteCity());