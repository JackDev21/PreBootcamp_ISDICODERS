// Ahora, implementa en otra funcion aparte el decrypt(), que recibirá como argumento un código encriptado(haciendo referencia al apartado 3.2)
// y nos devuelva el código desencriptado.

// Funcion que recibe un codigo y lo convierte en un array
const getCodeToString = (code) => {
    return code.toString().split("")

}


// Funcion  para cambiar la posicion de los digitos
const changeDigitPosition = (code) => {
    const codeToString = getCodeToString(code); // Obtenemos el codigo de la funcion anterior getCodeToString
    const lastDigit = codeToString.pop(); // Eliminamos el ultimo numero del codigo y se guarda en una variable
    codeToString.unshift(lastDigit); // Añadimos el ultimo numero al principio del codigo
    return codeToString.join(""); // Unimos el codigo en un string
}




// Funcion para multiplicar los digitos
const multiplyDigits = (code, multiplicator) => {
    const codeToString = getCodeToString(code); // Obtenemos el codigo de la funcion anterior getCodeToString
    const multipliedCode = codeToString.map((digit) => parseInt(digit) * multiplicator) // Iteramos sobre cada digito y con parseInt lo convertimos a un numero entero del codigo y multiplicamos cada digito del codigo.
    return multipliedCode.join(""); // Unimos el codigo en un string
}


// Funcion para desencriptar el codigo
const decrypt = (encryptedCode, dividend) => {
    const encryptedCodeToString = getCodeToString(encryptedCode); // Obtenemos el codigo de la funcion getCodeToString
    const decryptedCode = encryptedCodeToString.map((digit) => parseInt(digit) / dividend) // Recorremos con map cada digito del codigo y lo dividimos entre el dividendo
    return decryptedCode.join("");
}



// Funcion para codificar el codigo
const codeScript = (firstCode, secondCode, multiplicator) => {
    let encryptedFirstcode = changeDigitPosition(firstCode); // Modificamos el primer codigo usando la funcion changeDigitPosition, para modificar la posicion del codigo
    encryptedFirstcode = multiplyDigits(encryptedFirstcode, multiplicator);  // Modificamos el primer codigo usando la funcion multiplyDigits, para multiplicar los digitos del codigo

    let encryptedSecondcode = changeDigitPosition(secondCode);
    encryptedSecondcode = multiplyDigits(encryptedSecondcode, multiplicator);

    const result = [encryptedFirstcode, encryptedSecondcode]; // Devolvemos el resultado separado en un array.
    console.log(result);

    decrypt(result, multiplicator); // Devolvemos el resultado
}

codeScript(1234, 5678, 3)

