// A la función anterior, evita que se pueda dar una edad negativa y en ese caso retorne 0 años.

// Función que genera un número aleatorio entre 1900 y 2050.
const obtenerNumeroAleatorio = () => {
    const numeroMaximo = 2051; // Establece el valor máximo del número aleatorio.
    const numeroMinimo = 1900; // Establece el valor mínimo del número aleatorio.
    // Genera un número aleatorio utilizando el rango establecido y lo redondea hacia abajo.
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) + numeroMinimo;
}

// Función que devuelve el nombre proporcionado como argumento.
const obtenerMiNombre = (miNombre) => {
    return miNombre;
}

// Función que calcula la edad basándose en el año de nacimiento proporcionado como argumento.
const calcularMiEdad = (anioNacimiento) => {
    const anioActual = new Date().getFullYear(); // Obtiene el año actual.
    let edad = anioActual - anioNacimiento; // Calcula la diferencia entre el año actual y el año de nacimiento.
    if (edad < 0) { // Si la edad calculada es menor a 0, se establece como 0.
        edad = 0;
    }
    return edad; // Devuelve la edad calculada.
}

// Función que genera información personal basada en el nombre proporcionado como argumento.
const obtenerInformacionPersonal = (nombre) => {
    const nombreCompleto = obtenerMiNombre(nombre); // Obtiene el nombre completo.
    const anioNacimientoAleatorio = obtenerNumeroAleatorio(); // Genera un año de nacimiento aleatorio.
    const edad = calcularMiEdad(anioNacimientoAleatorio); // Calcula la edad basándose en el año de nacimiento aleatorio.
    // Devuelve una cadena de texto con el nombre completo y la edad.
    return `${nombreCompleto}, tengo ${edad} años.`;
}

// Imprime en la consola la información personal generada para el nombre "Jack".
console.log(obtenerInformacionPersonal("Jack"));