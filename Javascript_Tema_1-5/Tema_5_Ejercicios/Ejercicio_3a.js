// Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos 
//  encriptados (Los dos códigos se deberían encriptar en la misma función):

const codeScript = (code1, code2) => {
    // Convertir los parámetros a cadenas de texto para poder acceder a cada dígito
    const code1String = code1.toString();
    const code2String = code2.toString();

    // Convertir las cadenas de texto en arreglos de caracteres para poder iterar sobre ellos
    const code1Array = code1String.split("");
    const code2Array = code2String.split("");

    let result1 = ""; // Variable para almacenar la cadena de texto con los resultados
    let result2 = "";

    // Iterar sobre el arreglo de code1Array
    for (
        let currentPosition = 0;
        currentPosition < code1Array.length;
        currentPosition++
    ) {
        // Extraer el primer dígito del arreglo de code1Array y code2Array
        const firstDigit1 = code1Array.shift();
        const firstDigit2 = code2Array.shift();

        // Agregar los primeros dígitos extraídos al final de los arreglos
        code1Array.push(firstDigit1);
        code2Array.push(firstDigit2);

        // Unir los elementos del arreglo en una cadena de texto y agregar un salto de línea
        result1 += code1Array.join("") + "\n";
        result2 += code2Array.join("") + "\n";
    }

    // Retornar un objeto con las versiones encriptadas de code1 y code2
    return { encryptedCode1: result1, encryptedCode2: result2 };
};


console.log(codeScript("1234", "5678"))