// Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

// Convierte un número en una cadena de dígitos
const getCodeToString = (code) => {
    return code.toString().split(""); // Convierte el número en cadena y luego separa cada dígito en un array
};

// Cambia la posición del último dígito al principio de la cadena
const changeDigitsPosition = (code) => {
    const codeToString = getCodeToString(code); // Convierte el número en una cadena de dígitos
    const lastDigit = codeToString.pop(); // Se extrae el último dígito
    codeToString.unshift(lastDigit); // Se coloca al principio
    return codeToString.join(""); // Une los dígitos en una cadena
};

// Multiplica cada dígito del código por un multiplicador
const multiplyDigits = (code, multiplicator) => {
    const codeToString = getCodeToString(code); // Convierte el número en una cadena de dígitos
    const multipliedCode = codeToString.map(
        (digit) => parseInt(digit) * multiplicator // Multiplica cada dígito por el multiplicador
    );
    return multipliedCode.join(""); // Une los dígitos multiplicados en una cadena
};

// Encripta un código combinando cambio de posición y multiplicación
const encrypt = (code, multiplicator) => {
    let encryptedCode = changeDigitsPosition(code); // Cambia la posición de los dígitos
    encryptedCode = multiplyDigits(encryptedCode, multiplicator); // Multiplica los dígitos cambiados
    return encryptedCode; // Devuelve el código encriptado
};

// Desencripta un código dividiendo cada dígito por un divisor
const decrypt = (codeToDecrypt, divisor) => {
    const decryptedCode = getCodeToString(codeToDecrypt).map(
        (digit) => parseInt(digit) / divisor // Divide cada dígito por el divisor
        // Podría ser necesario manejar adecuadamente los decimales
    );
    return decryptedCode.join(""); // Une los dígitos divididos en una cadena
};

// Función principal para encriptar y desencriptar códigos
const codeScript = (code1, code2, multiplicator) => {
    const encryptedFirstCode = encrypt(code1, multiplicator); // Encripta el primer código
    const encryptedSecondCode = encrypt(code2, multiplicator); // Encripta el segundo código

    console.log("Encrypted Codes:", [encryptedFirstCode, encryptedSecondCode]); // Muestra los códigos encriptados

    const decryptedFirstCode = decrypt(encryptedFirstCode, multiplicator); // Desencripta el primer código
    const decryptedSecondCode = decrypt(encryptedSecondCode, multiplicator); // Desencripta el segundo código

    console.log("Decrypted Codes:", [decryptedFirstCode, decryptedSecondCode]); // Muestra los códigos desencriptados
};

codeScript(1234, 4321, 8); // Llama a la función principal con dos códigos y un multiplicador
