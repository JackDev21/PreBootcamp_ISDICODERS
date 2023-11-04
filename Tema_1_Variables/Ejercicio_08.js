// Declara tu nombre y tu edad y luego crea un condicional para que en caso de no coincidir con tus datos, mostrar un error

const myName = "Jack";
const myAge = 35;

if (myName !== "Jack" || myAge != 36) {
    console.log("this is not you!");
    } else if (myName === "Jack" && myAge === 36) {
        console.log("Hi!! Glad to see u again!");
    }


/* Los operadores lógicos en JavaScript son: 
-  &&  (AND lógico): Retorna  true  si ambos operandos son  true , de lo contrario retorna  false . 
-  ||  (OR lógico): Retorna  true  si al menos uno de los operandos es  true , de lo contrario retorna  false . 
-  !  (NOT lógico): Retorna el valor opuesto del operando, convirtiendo  true  a  false  y  false  a  true .*/