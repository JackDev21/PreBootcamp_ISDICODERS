// Ahora declara otra función que calcule tu edad respecto tu año de nacimiento.

const calcEdad = (añoNacimiento)  =>{
    const añoActual = new Date().getFullYear();
    const edad = añoActual - añoNacimiento

    console.log(`Tengo ${edad} años.`)
    
}

calcEdad(1987)