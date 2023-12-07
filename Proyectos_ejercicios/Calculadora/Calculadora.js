

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

// Función principal que actúa como calculadora
const calculatorPro = () => {
    // Mensaje de bienvenida
    console.log("Bienvenido a la calculadora!");

    // Captura de los números ingresados por el usuario
    let input1 = prompt("Introduce el primer número a calcular: ");
    let input2 = prompt("Introduce el segundo número a calcular (o deja en blanco para calcular la raíz cuadrada): ");

    // Conversión de los valores ingresados a números
    let valor1 = Number(input1);
    let valor2 = Number(input2);

    // Validación del primer número ingresado
    if (isNaN(valor1)) {
        console.log("El primer valor no es un número, introduce un número válido.");
        return; // Termina la función si el primer valor no es un número válido
    }

    // Comprueba si el segundo valor está vacío o no es un número
    if (input2 === "" || isNaN(valor2)) {
        // Si el segundo valor está vacío o no es un número, calcula la raíz cuadrada del primer número
        console.log(`La raíz cuadrada de ${valor1} es: ${Math.sqrt(valor1).toFixed(3)}`);
        return repetirOperacion(); // Llama a la función para preguntar si se desea realizar otra operación
    } else {
        // Si se ingresaron dos números válidos, realiza operaciones matemáticas
        const calculator = (a, b) => {
            // Realiza operaciones matemáticas básicas
            const suma = a + b;
            const resta = a - b;
            const multiplicacion = a * b;
            let division;

            // Verifica si el segundo número es cero para evitar división por cero
            if (b === 0) {
                division = "No se puede dividir entre 0";
            } else {
                division = (a / b).toFixed(3); // Realiza la división y redondea el resultado a 3 decimales
            }

            // Almacena los resultados en un array
            const resultado = [];
            resultado.push(suma.toFixed(3));
            resultado.push(resta.toFixed(3));
            resultado.push(multiplicacion.toFixed(3));
            resultado.push(division);

            // Devuelve un objeto con etiquetas de resultados para cada operación
            return {
                "El resultado para la suma es": `${a} + ${b} = ${resultado[0]}`,
                "El resultado para la resta es": `${a} - ${b} = ${resultado[1]}`,
                "El resultado para la multiplicación es": `${a} * ${b} = ${resultado[2]}`,
                "El resultado para la división es": `${a} / ${b} = ${resultado[3]}`
            };
        }
        console.log(calculator(valor1, valor2)); // Muestra los resultados de las operaciones
        return repetirOperacion(); // Llama a la función para preguntar si se desea realizar otra operación
    }
}

// Función para preguntar al usuario si desea realizar otra operación
const repetirOperacion = () => {
    const otraOperacion = prompt("¿Quieres realizar otra operación? (Si/No): ").toLowerCase();
    if (otraOperacion === "si") {
        calculatorPro(); // Llama a la función principal para realizar otra operación
    } else if (otraOperacion === "no") {
        console.log("Gracias por utilizar la aplicación calculadora.");
    } else {
        console.log("Por favor, introduce 'si' o 'no'.");
        repetirOperacion(); // Vuelve a preguntar si se ingresó algo diferente a 'si' o 'no'
    }
}

calculatorPro(); // Inicia la aplicación calculadora al llamar a la función principal
