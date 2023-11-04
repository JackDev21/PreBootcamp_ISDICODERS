// Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

const nombre = ["J","A","C","K","C","A","N","T","O"]
const caracter = "/"

const nombreSeparado = nombre.join(caracter)
console.log(nombreSeparado)


// Version de ISDICODERS
const nombreSeparadoOpcion2 = (nombre) => {
    return nombre.join("/");
};
const opcion2 = nombreSeparadoOpcion2(nombre);
console.log(opcion2)
