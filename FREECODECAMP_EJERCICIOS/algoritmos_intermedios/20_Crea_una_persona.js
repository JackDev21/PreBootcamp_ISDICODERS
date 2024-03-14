/* Crea una persona
Completa el constructor de objetos con los siguientes métodos:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Ejecuta las pruebas para ver el resultado esperado para cada método. Estos métodos deben ser el único medio disponible para interaccionar con el objeto.
 Cada método declarará una nueva instancia de Person como new Person('Bob', 'Ross'). */

const Person = function (first, last) {
  let firstName = first;
  let lastName = last;


  this.getFirstName = function () {
    return firstName
  }

  this.getLastName = function () {
    return lastName
  }

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  }


  this.setFirstName = function (first) {
    firstName = first

  }

  this.setLastName = function (last) {
    lastName = last

  }

  this.setFullName = function (first, last) {
    firstName = first
    lastName = last
  }

}


const bobRoss = new Person('Bob', 'Ross');
console.log(bobRoss.getFullName()); // Outputs: Bob Ross

bobRoss.setFirstName('Haskell');
console.log(bobRoss.getFullName()); // Outputs: Haskell Ross 


const joseCanto = new Person('Jose Agustin', 'Canto');
console.log(joseCanto.getFullName()); // Outputs: Jose Agustin Canto