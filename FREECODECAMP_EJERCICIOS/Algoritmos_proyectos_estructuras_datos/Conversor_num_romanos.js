/* Conversor de números romanos
Convierte el número proporcionado en un número romano.

Números romanos	Números arábigos
M 	1000
CM	900
D	  500
CD  400
C 	100
XC	90
L 	50
XL	40
X 	10
IX	 9
V	   5
IV   4
I	   1
Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

 */


function convertToRoman(num) {

  const romanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let romanNumber = ""

  for (let key in romanos) {
    console.log(key)
    console.log(romanos[key])

    while (num >= romanos[key]) {
      romanNumber = romanNumber + key
      console.log(romanNumber)
      num = num - romanos[key]

      console.log(num)

    }
  }


  return romanNumber;
}

console.log(convertToRoman(2024));