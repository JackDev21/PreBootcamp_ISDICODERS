const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicatorNumber = 3;

const multplicationNumber = numbers.map(
  (number) => number * multiplicatorNumber
);

console.log(multplicationNumber);