// Ahora declara otra función que calcule tu edad respecto tu año de nacimiento.

const calcEdad = (añoNacimiento)  => {
    // new Date() crea una nueva instancia del objeto Date, que representa la fecha y hora actual.
    //.getFullYear() es un método del objeto Date que devuelve el año actual como un número de cuatro dígitos.
    const añoActual = new Date().getFullYear();
    
    // Calcula la edad restando el año de nacimiento al año actual
    const edad = añoActual - añoNacimiento;

    // Imprime un mensaje en la consola mostrando la edad calculada
    console.log(`Tengo ${edad} años.`);
}

// Llama a la función calcEdad pasando 1987 como argumento
calcEdad(1987);