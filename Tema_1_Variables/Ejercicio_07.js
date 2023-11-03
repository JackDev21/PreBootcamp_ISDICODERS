// Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje "We are in the middle of loop".

const listnum = [1, 2, 3, 4, 5];
const mitad = Math.floor(listnum.length / 2);

for (let num = 0; num < listnum.length; num++) {
    if (num === mitad) {
    console.log("We are in the middle of loop.");
    }
    console.log(listnum[num])
}