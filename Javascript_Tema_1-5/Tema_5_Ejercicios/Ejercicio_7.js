// El nombre de los números
// Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal.

const numWithWords = (number) => {

    const units = [ // Creamos un array con los nombres de los números
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (number < 0 || number > 100) { // Verificamos que el número sea entre 0 y 100
        console.log("Numero fuera de rango");
        return;
    }

    if (number === 0) { // Verificamos que si el numero es 0 devolvemos "zero"
        return "zero";
    }

    if (number < 10) { // Verificamos que si el numero es menor que 10 devolvemos el nombre del numero
        return units[number];
    }

    if (number < 20) { // Verificamos que si el numero es menor que 20 devolvemos el nombre del numero
        return teens[number - 10];
    }

    if (number < 100) { // Verificamos que si el numero es menor que 100 devolvemos el nombre del numero
        return tens[Math.floor(number / 10)] + " " + units[number % 10]; // Devolvemos el nombre del numero dividido por 10 para sacar la decena y el resto. 
    }                                                                    // En units obtenemos el resto para sacar el nombre del numero 

    if (number === 100) { // Verificamos que si el numero es 100 devolvemos el nombre del numero
        return "one hundred";
    }

}

console.log(numWithWords(35));