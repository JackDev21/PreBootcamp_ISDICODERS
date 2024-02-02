// Podemos controlar este error con un condicional if?const a = 3


//const a = 3
//const b = "string"

//console.log(a * b)

// Resultado NaN

const number = 3
const text = "string"


// NaN = > Not a Number 
// Number.isNaN = > Aqui decimos que si numero no es un numero.

// Aqui utilzamos condicional if  para ver si resultado de number * text es no es un numero, 
if (Number.isNaN(number * text)){
    console.log("No puedes hacer el calculo de un string con un numero.")
}