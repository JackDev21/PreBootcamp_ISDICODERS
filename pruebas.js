const getRandomNumber = () => {
  const maxNumber = 2050;
  const minNumber = 1900;

  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const getMyName = (myName) => {
  return `myName, `;
};


const calculateMyAge = (birthOfYear) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthOfYear;

  return `I'm ${age} years old`;
};

const getMyPersonalData = (nameData) => {
  const name = getMyName(nameData);
  const randomYear = getRandomNumber();
  const age = calculateMyAge(randomYear);
  return `${name} ${age}`;
};

const name = "Jon";

console.log(getMyPersonalData(name));