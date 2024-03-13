/* Argumentos opcionales
Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined. */

function addTogether() {

  if (typeof arguments[0] !== "number") {
    return undefined
  }

  if (arguments.length === 2) {
    if (typeof arguments[1] === "number" && typeof arguments[0] === "number") {
      return arguments[0] + arguments[1]
    }

  } else {
    let sumTwoAnd = arguments[0]
    return function (secondArg) {
      if (typeof secondArg !== "number") {
        return undefined
      }
      return sumTwoAnd + secondArg

    }
  }

}

console.log(addTogether((5), ("a")));