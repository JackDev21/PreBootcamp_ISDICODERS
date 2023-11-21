// Ahora, vamos a añadir un nivel más de seguridad. Después de cambiar la posición de los dígitos, multiplicaremos a cada número por otro número cuyo
// resultado no sea superior a 10. (Si el resultado és superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores).


// Funcion que recibe un codigo y lo convierte en un array
const getCodeToString = (code) => {
    return code.toString().split("")

}

console.log(getCodeToString(1234))

// Funcion  para cambiar la posicion de los digitos
const changeDigitPosition = (code) => {
    const codeToString = getCodeToString(code); // Obtenemos el codigo de la funcion anterior getCodeToString
    const lastDigit = codeToString.pop(); // Eliminamos el ultimo numero del codigo y se guarda en una variable
    codeToString.unshift(lastDigit); // Añadimos el ultimo numero al principio del codigo
    return codeToString.join(""); // Unimos el codigo en un string
}

console.log(changeDigitPosition(1234))


// Funcion para multiplicar los digitos
const multiplyDigits = (code, multiplicator) => {
    const codeToString = getCodeToString(code); // Obtenemos el codigo de la funcion anterior getCodeToString
    const multipliedCode = codeToString.map((digit) => parseInt(digit) * multiplicator) // Iteramos sobre cada digito del codigo y multiplicamos cada digito del codigo.
    return multipliedCode.join(""); // Unimos el codigo en un string
}

console.log(multiplyDigits(1234, 3))


// Funcion para codificar el codigo
const codeScript = (firstCode, secondCode, multiplicator) => {
    let encryptedFirstcode = changeDigitPosition(firstCode); // Modificamos el primer codigo usando la funcion changeDigitPosition, para modificar la posicion del codigo
    encryptedFirstcode = multiplyDigits(encryptedFirstcode, multiplicator);  // Modificamos el primer codigo usando la funcion multiplyDigits, para multiplicar los digitos del codigo

    let encryptedSecondcode = changeDigitPosition(secondCode);
    encryptedSecondcode = multiplyDigits(encryptedSecondcode, multiplicator);

    return [encryptedFirstcode, encryptedSecondcode]; // Devolvemos el resultado separado en un array.
}

console.log(codeScript(1234, 5678, 3))

