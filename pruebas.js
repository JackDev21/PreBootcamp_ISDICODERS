const name = ["J", "O", "N", "S", "N", "O", "W"];

name.unshift("Jon"); //  el método  unshift()  se utiliza para agregar elementos al inicio de un array, 
                     // incluso si el array es una constante. Aunque la constante  name  está declarada, aún puedes utilizar  unshift()  para agregar elementos al array.
name.splice(3, 0, 40);
console.log(`My name is ${name[0]} and I'm ${name[3]} years old.`);