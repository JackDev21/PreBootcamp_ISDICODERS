// Iguala tu función a una variable y ejecútala


// Este código define una función llamada saludo que toma dos parámetros: name y age.
const saludo = (name, age) => {
 // La función devuelve una cadena de texto que incluye los valores de name y age.
    return `Mi nombre es ${name}, tengo ${age} años.`
}

// Se define una variable miNombre y se le asigna el valor "Jack".
const miNombre = "Jack"

// Se define una variable myAge y se le asigna el valor 30.
const myAge = 30

// Se llama a la función saludo con los valores de las variables miNombre y myAge, y se guarda el resultado en la variable datos.
const datos = saludo(miNombre, myAge);

// Se imprime en la consola el valor de la variable datos.
console.log(datos)