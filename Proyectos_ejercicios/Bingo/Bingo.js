/* BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números 
(excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, 
cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá 
preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará una única vez el mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará 
cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

Empieza por la versión más básica! (No se entrega)
Why?
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, 
una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. 
No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos.
Si hay coincidencia, remplazaremos el número por una 'x' y mostramos el cartón modificado

Sepáralo todo en funciones, englobado en una función global llamada bingo(), tal que:

-Function! => Generar Numero Random Bombo

-Function! => Nuevo turno (Match carton[i] === randomNum)

-Function! => Preguntar Nuevo Turno

WorkFlow:


Pro 👊🏼

Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "yes" para proceder.
Los números del cartón deben aparecer de una forma amigable y ordenados de menor a mayor.
Los números del cartón no se pueden repetir.
Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.
Antes de empezar el juego, muestra el sistema de puntos al usuario.
Ranking de usuarios (ordenado por puntos).
Recursos: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */


const readlineSync = require("readline-sync");

let ranking = []; // Almacena los puntajes de los usuarios

// Función principal del juego de Bingo
const bingo = () => {
    let lineaCantada = false; // Indica si se cantó línea
    let turnos = 0; // Contador de turnos
    const puntosBase = 200; // Puntos base del juego

    // Muestra el sistema de puntos al usuario
    const mostrarSistemaPuntos = () => {
        // Muestra información sobre el sistema de puntaje
        console.log("Bienvenido al Bingo!");
        console.log("Sistema de Puntos:");
        console.log("- Menos turnos = Más puntos");
        console.log("- Más turnos = Menos puntos");
        console.log("¡Completa el cartón en menos turnos para obtener más puntos!\n");
    };

    // Función que da la bienvenida al usuario
    const bingoGame = (user) => {
        console.log("BINGO GAME!");
        console.log(`Bienvenido ${user}!`);
    };

    // Genera un cartón de Bingo aleatorio
    const generarCarton = () => {
        const carton = new Set(); // Set para almacenar números únicos

        // Genera 9 números únicos entre 1 y 20 para el cartón
        while (carton.size < 9) {
            const numero = Math.floor(Math.random() * 20) + 1;
            carton.add(numero);
        }
        return Array.from(carton); // Convierte el set en un array
    };

    // Muestra el cartón en formato de tabla
    const mostrarCarton = (user, carton) => {
        // Ordena el cartón numéricamente
        carton.sort((a, b) => a - b);

        const rows = []; // Matriz para las filas del cartón
        for (let i = 0; i < 3; i++) { // Itera 3 veces para generar las filas del cartón
            const row = {}; // Objeto para representar cada fila del cartón
            for (let j = 0; j < 3; j++) { // Itera 4 veces para generar las columnas del cartón
                row[`Columna ${j + 1}`] = carton[i * 3 + j]; // Agrega la columna al objeto de fila
            }
            rows.push(row); // Agrega la fila al array de filas
        }
        console.log(`Cartón de ${user}:`);
        console.table(rows); // Muestra el cartón como tabla en consola
    };

    // Genera un nuevo cartón o permite continuar con el actual
    const generarNuevoCarton = () => {
        let carton; // Almacena el cartón actual
        let jugar = true;  // Indica si se debe generar un nuevo cartón

        while (jugar) {
            const otroCarton = readlineSync.question("¿Deseas otro cartón? (Si/No)").toLowerCase();

            if (otroCarton === 'no') {
                carton = generarCarton(); // Genera un nuevo cartón
                jugar = false; // Sale del bucle
            } else if (otroCarton === 'si') {
                carton = generarCarton(); // Genera un nuevo cartón
                mostrarCarton(user, carton); // Muestra el cartón
            } else {
                console.log("Opción no válida. Por favor, responde con 'Si' o 'No'.");
            }
        }
        return carton;
    };

    // Realiza un turno del juego
    const turno = (carton) => {
        const randomNum = Math.floor(Math.random() * 20) + 1; // Genera un número aleatorio
        console.log(`El numero es: ${randomNum}`); // Muestra el número aleatorio

        if (carton.includes(randomNum)) { // Verifica si el número está en el cartón
            const index = carton.indexOf(randomNum); // Obtiene el índice del número en el cartón
            carton[index] = "X"; // Marca el número en el cartón como "X"
            console.log(`El numero ${randomNum} ha sido encontrado.`);
        } else {
            console.log(`El numero ${randomNum} no ha sido encontrado en tu cartón.`);
        }

        mostrarCarton(user, carton); // Muestra el cartón actualizado
        return carton;
    };

    // Verifica si se ha completado una línea en el cartón
    const linea = (carton) => {
        if (!lineaCantada) { // Verifica si la línea ya fue completada
            const filas = [ // Matriz de filas del cartón
                carton.slice(0, 3),
                carton.slice(3, 6),
                carton.slice(6, 9)
            ];
            for (let fila of filas) { // Itera sobre las filas del cartón
                if (fila.every(element => element === 'X')) { // Verifica si la fila está completa
                    console.log("¡LINEA!");
                    lineaCantada = true; // Marca la línea como completada
                }
            }
        }
    };

    // Maneja los turnos del juego y verifica si se completó el cartón
    const nuevoTurno = (carton, user) => {
        let continuar = true;
        while (continuar && !carton.every(element => element === 'X')) { // Verifica si el cartón ya se completo
            const answer = readlineSync.question("¿Deseas seguir jugando? (Si/No)").toLowerCase();
            if (answer === "no") {
                console.log('¡Gracias por jugar!');
                continuar = false;
            } else {
                carton = turno(carton); // Realiza un turno
                linea(carton); // Verifica si se completó una línea
                turnos++; // Incrementa el contador de turnos
                console.log(`Turno ${turnos}`);
            }
        }
        if (carton.every(element => element === 'X')) {
            const puntos = calcularPuntos(turnos, user); // Calcula los puntos al completar el cartón
            console.log(`¡Bingo! Has completado el cartón en ${turnos} turnos.`);
            console.log(`Has obtenido una puntación de: ${puntos}`);
        }
        return carton;
    };

    // Pregunta al usuario si desea jugar otra partida
    const nuevaPartida = () => {
        const jugarNuevamente = readlineSync.question("¿Deseas jugar otra partida? (Si/No)").toLowerCase();
        if (jugarNuevamente === "si") {
            lineaCantada = false; // Reinicia la variable para la nueva partida
            turnos = 0; // Reinicia el contador de turnos
            bingo(); // Inicia una nueva partida
        } else {
            console.log("¡Hasta la próxima!");
        }
    };

    // Calcula los puntos del usuario y los añade al ranking
    const calcularPuntos = (turnos, user) => {
        const puntos = puntosBase - turnos; // Calcula los puntos basados en los turnos
        const puntosFinal = puntos >= 0 ? puntos : 0; // Asegura que los puntos no sean negativos
        ranking.push({ user: user, puntos: puntosFinal }); // Añade usuario y puntaje al ranking
        return puntosFinal;
    };

    // Muestra el ranking de usuarios ordenados por puntaje
    const mostrarRanking = () => {
        ranking.sort((a, b) => b.puntos - a.puntos); // Ordena el ranking por puntaje

        console.log('\nRanking de Usuarios:');
        ranking.forEach((element, index) => { // Muestra el ranking ordenado 
            console.log(`${index + 1}. ${element.user} - ${element.puntos} puntos`) // Imprime el usuario y puntaje
        })
    };

    const user = readlineSync.question("Bienvenido al Bingo!. Introduce tu nombre de jugador: ");
    bingoGame(user); // Da la bienvenida al usuario
    mostrarSistemaPuntos(); // Muestra el sistema de puntos
    let carton = generarCarton(); // Genera un cartón
    mostrarCarton(user, carton); // Muestra el cartón generado
    generarNuevoCarton(); // Pregunta si se desea otro cartón o continuar
    nuevoTurno(carton, user); // Inicia el juego
    mostrarRanking(); // Muestra el ranking al finalizar la partida
    nuevaPartida(); // Pregunta si se desea jugar otra vez
};

bingo(); // Inicia el juego de Bingo
