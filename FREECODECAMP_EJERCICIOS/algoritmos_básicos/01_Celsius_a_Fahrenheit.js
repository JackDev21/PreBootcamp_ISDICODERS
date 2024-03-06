/*Convierte Celsius a Fahrenheit
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida y 
asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente para ayudarte a 
convertir la temperatura Celsius a Fahrenheit. */


function convertCtoF(celsius) {
  let fahrenheit;

  fahrenheit = (celsius * 9 / 5) + 32

  return ` ${celsius} C = ${fahrenheit} F`;
}

console.log(convertCtoF(30));
console.log(convertCtoF(20))