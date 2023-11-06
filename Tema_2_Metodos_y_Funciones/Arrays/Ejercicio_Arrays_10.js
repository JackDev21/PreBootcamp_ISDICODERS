// Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, 
// como podria hacer para introducirlo en la primera posición?

const array = ["J","A","C","K","C","A","N","T","O"]

array.shift(); // shift para eliminar la primera posición
array.shift();
array.shift();
array.shift();

console.log (array);


array.unshift("J","A","C","K")



console.log (array.join(""))