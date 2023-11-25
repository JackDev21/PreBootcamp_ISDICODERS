// Simple Scripting program.
// Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código.
// Los números se van moviendo en la misma dirección que las agujas del reloj.

const rotateCode = (code) => {
  // Convertir el código a una cadena para poder acceder a cada dígito
    let codeStr = String(code);

  // Verificar si el código tiene 4 dígitos
    if (codeStr.length !== 4) {
    console.log("Error! Introduce un número de 4 dígitos.");
    return;
    }

  // Rotar el código
    for(let i = 0; i < codeStr.length; i++){ // bucle for que se ejecuta mientras i sea menor que codeStr.length, se inicia en 0 y se incrementa en 1 en cada iteración.
    // codeStr.length - 1 con esto accedemos al ultimo dígito del código.
    // codeStr.slice(0, codeStr.length - 1) con esto accedemos a todos los dígitos excepto el primero. 
    // codeStr[0] con esto accedemos al primer dígito del código.
        codeStr = codeStr[codeStr.length - 1] + codeStr.slice(0, codeStr.length - 1); 

    console.log(codeStr);
    }
}

rotateCode(3712);

/*

const codeScript = (code) => {
    const codeString = code.toString();
    const digitsArray = codeString.split("");
    let result = "";

    for (
    let currentPosition = 0;currentPosition < digitsArray.length;currentPosition++) {
      const firstDigit = digitsArray.shift(); // shift para eliminar la primera posicion
      digitsArray.push(firstDigit); // push para agregar la primera posicion
      result += digitsArray.join("") + "\n"; // join para unir todos los elementos de un array en una cadena de texto
    }

    return result;
;

console.log(codeScript(3712));
  */