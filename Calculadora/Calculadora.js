

/*Calculator! ➗➕
Haz una calculadora.

Primera versión que no se entrega.
Un único programa al que le pasarás dos argumentos que recogerás mediante el método prompt(); el usuario podrá visualizar por consola la suma, resta, multiplicación y 
división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (en caso de que hubieran). El programa debe gestionar y actuar correctamente 
(gestión de errores) en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, deberá mostrarle un aviso de que lo que ha introducido no es un número.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

Versión PRO para Entregar.
Ahora que ya has hecho una primera versión de la calculadora. ¿Podrías hacer que la calculadora realice operaciones sean cuales sean el número de argumentos pasados a la función?
Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
En ninguna de las dos versiones el usuario debe seleccionar la operación matemática, directamente se mostrarán las operaciones correspondientes (si hay un solo número se mostrará la raíz cuadrada de ese número y si hay más de un número se mostrarán las 4 operaciones).
Prohibido usar la función eval().

Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters */


const prompt = require("readline-sync")

console.log("Bienvenido a la calculadora!");
const valor1 = prompt.question("Introduce el prmier número a calcular: ");
const valor2 = prompt.question("Introduce el segundo número a calcular: ");



const calculator = (valor1, valor2) => {
    const suma = (a, b) => {
        return Number(a) + Number(b);
    }

    const resta = (a, b) => {
        return Number(a) - Number(b);
    }

    const multiplicacion = (a, b) => {
        return Number(a) * Number(b);
    }

    const división = (a, b) => {
        if (Number(b) === 0) {
            console.log("No se puede dividir entre 0");
            return " Intentalo de nuevo"
        } else {
            return Number(a) / Number(b);
        }
    }
    return {
        suma: suma(valor1, valor2).toFixed(3),
        resta: resta(valor1, valor2).toFixed(3),
        multiplicacion: multiplicacion(valor1, valor2).toFixed(3),
        división: división(valor1, valor2).toFixed(3),
    }

}


console.log(calculator(valor1, valor2));