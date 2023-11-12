// Añade tu apellido a "name" e indica en que posición del string empieza (modificando la función prueba a buscar el espacio entre el nombre y el apellido):

const name = "JackDev"
const lastname = "Cantó"
const fullname = `${name} ${lastname}`

console.log(fullname)

// Con indexOf buscamos la posicion el index de " " y suma de 1 se utiliza para ajustar la posición al inicio del apellido en lugar de al espacio en blanco
const posicion = fullname.indexOf(" ") + 1  

console.log(posicion)
