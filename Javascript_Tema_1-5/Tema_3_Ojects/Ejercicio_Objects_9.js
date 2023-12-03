// Definimos una función llamada 'createObject' que toma dos parámetros: 'name' y 'subs'.
function createObject(name, subs) {
    // Dentro de la función, declaramos una constante 'persona' y le asignamos un objeto literal.
    const persona = {
        // La propiedad 'name' del objeto 'persona' se establece con el valor del parámetro 'name'.
        name: name,
        // La propiedad 'subscribers' del objeto 'persona' se establece con el valor del parámetro 'subs'.
        subscribers: subs,
        // La propiedad 'hash' se calcula multiplicando la longitud del string 'name' por el valor de 'subs'.
        // Esto crea un valor numérico que podría utilizarse como un identificador único o para operaciones de hashing.
        hash: name.length * subs,
        // Dentro del objeto 'persona', definimos un método 'getStatus'.
        getStatus: function () {
            // Este método, cuando se llama, devuelve un string que informa sobre el nombre del canal y su número de suscriptores.
            // Aquí, 'persona.name' y 'persona.subscribers' hacen referencia directamente a las propiedades del objeto 'persona'.
            return `El canal de ${persona.name} tiene ${persona.subscribers} suscriptores`;
        }
        // No se necesita una coma aquí después de la definición del método 'getStatus' porque es el último miembro del objeto.
    }
    // La función 'createObject' devuelve el objeto 'persona' completo con todas sus propiedades y el método.
    return persona;
}
// La función 'createObject' está ahora completa y puede ser utilizada para crear objetos 'persona' con un nombre, número de suscriptores, y un método para obtener su estado.