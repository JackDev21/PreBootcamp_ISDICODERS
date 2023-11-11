// Escribe una función que declare un array con los números del 1 al 9 y muestre por pantalla los números unidos por parejas (1-2, 2-3, 3-4, ...) 
// multiplicados por 2. Puedes utilizar los métodos push(), join(), y map(). Además, la función debería aceptar como argumentos el array a tratar, 
// el número a multiplicar, y el número de parejas a mostrar.

// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18


// Declaramos la variables
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const multiplicadorNumero = 2; 
const numerosPares = 8; 

// Declaramos funcion llamada mostrarParejas, con tres parametros.
const mostrarParejas = (numeros, multiplicadorNumero, numerosPares) => { 
    // Bucle for que se ejecuta mientras posicionNumero sea menor que numerosPares, se inicia en 0 y se incrementa en 1 en cada iteración.
    for (let posicionNumero = 0; posicionNumero < numerosPares; posicionNumero++) { 
        // método .slice() se utiliza para seleccionar una subsección de elementos de un array. Los parámetros que se pasan a .slice() 
        // indican el rango de índices que se deben incluir en la subsección, es decir seleccionamos el numero entre posicion 0 y posicion 0 + 2, que seria el numero en la posicion 2, es decir el numero 3.
        // posicionNumero es el índice de inicio de la subsección.
        // posicionNumero + 2 es el índice de fin de la subsección, pero sin incluir el elemento en ese índice

        const numeroPar = numeros.slice(posicionNumero, posicionNumero + 2).map((number) => number * multiplicadorNumero).join(" - "); 
        console.log(`${posicionNumero}ª pareja ${numeroPar}`); 
    }
};

mostrarParejas(numeros, multiplicadorNumero, numerosPares); 