// Crea un programa que use la encriptación Romana
// 1 - Programa el desencriptador, pasa como parámetro CEORDS y que devuelva CODERS.

/*¿Cómo es la encriptación Romana? Si tenemos la palabra CODERS, la palabra encriptada será CEORDS. Si divides la palabra original en 2 grupos obtienes:

COD
|-|-|
ERS Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes CEORDS.
Entonces, el programa deberá recibir CODERS y retornar CEORDS */



const encryptRoma = (word) => {
    const letterLength = word.length;
    const pairLetter = [];
    const oddLetter = [];

    for (let index = 0; index < letterLength; index++) {
        if (index % 2 === 0) {
            pairLetter.push(word[index])
        }
        if (index % 2 !== 0) {
            oddLetter.push(word[index])
        }
    }

    return `${pairLetter.join("")}${oddLetter.join("")} `
}



const palabra = "LORENA"

const programaEncriptado = encryptRoma(palabra)

console.log(programaEncriptado)


