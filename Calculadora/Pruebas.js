const prompt = require("readline-sync");


function calculateAndDisplayResults(num1, num2) {
    const results = [];
    if (num2 === null) {
        const sqrt = Math.sqrt(num1).toFixed(3);
        results.push(`La raíz cuadrada de ${num1} es: ${sqrt}`);
    } else {
        const sum = (num1 + num2).toFixed(3);
        const difference = (num1 - num2).toFixed(3);
        const product = (num1 * num2).toFixed(3);
        const quotient = num2 !== 0 ? (num1 / num2).toFixed(3) : 'No se puede dividir por cero';
        results.push(`La suma de ${num1} y ${num2} es: ${sum}`);
        results.push(`La resta de ${num1} y ${num2} es: ${difference}`);
        results.push(`La multiplicación de ${num1} y ${num2} es: ${product}`);
        results.push(`La división de ${num1} y ${num2} es: ${quotient}`);
    }
    return results;
}

function isNumeric(value) {
    return !isNaN(value) && isFinite(value);
}

function promptUserAndCalculate() {
    const input1 = prompt.question("Introduce el primer número:");
    const input2 = prompt.question("Introduce el segundo número, o deja en blanco si solo quieres la raíz cuadrada del primero:");

    let num1 = parseFloat(input1);
    let num2 = input2 ? parseFloat(input2) : null;

    if (isNumeric(input1) && (input2 === "" || isNumeric(input2))) {
        const results = calculateAndDisplayResults(num1, num2);
        results.forEach(result => console.log(result));
    } else {
        console.log("Por favor, introduce solo números.");
    }
}

promptUserAndCalculate();