// Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje "We are in the middle of loop".

const listnum = [1, 2, 3, 4, 5];
const mitad = Math.floor(listnum.length / 2);   // Utilizamos Math.floor para redondear hacia abajo al entero mas cercano. 
                                                // Y dividimos listnum entre 2 para encontrar la mitad.

//Bucle for que recorre una lista de números. El bucle comienza en 0 y continúa hasta que el valor de 'num' sea menor que la longitud de la lista 'listnum'. 
//En cada iteración, 'num' se incrementa en 1.
for (let num = 0; num < listnum.length; num++) { 
    if (num === mitad) { // Utilizamos if para comparar si el valor de "num" es igual a "mitad" entonces estaremos en el medio del bucle.
    console.log("We are in the middle of loop."); // e imprimimos que estamos en el medio del bucle for.
    }
    console.log(listnum[num]) // Aqúi imprimimos la "listnum" con los numeros recorridos.
} 