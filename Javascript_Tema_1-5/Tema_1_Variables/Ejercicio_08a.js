// Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

const data = [
    {name: "Bob", age: 10},
    {name: "Jonh", age: 12},
    {name: "Lolo", age: 20},
    {name: "Jack", age: 36},
    {name: "Paco", age: 30},
    {name: "Jose", age: 25}
];



let encontrado = false;

for ( let info = 0; info < data.length; info ++ ) {
    if (data [info].name === "Jack" && data [info].age === 36){
        resultado = `We found your data! Your name is ${data[info].name} and your age is ${data[info].age}`;
        console.log(resultado)
            
            // `` estas comillas formatean los datos seguido de ${data[info].name} como ejemplo.
        encontrado = true
    }
}
    if (encontrado === false){
        console.log("Not found!")
}