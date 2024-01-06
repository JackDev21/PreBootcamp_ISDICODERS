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

const bingo = () => {
    let lineaCantada = false;
    let turnos = 0;
    const puntosBase = 100;

    // Mostramos el sistema de puntos al usuario
    const mostrarSistemaPuntos = () => {
        console.log("Bienvenido al Bingo!");
        console.log("Sistema de Puntos:");
        console.log("- Menos turnos = Más puntos");
        console.log("- Más turnos = Menos puntos");
        console.log("¡Completa el cartón en menos turnos para obtener más puntos!\n");
    };

    const bingoGame = (user) => {
        console.log("BINGO GAME!");
        console.log(`Bienvenido ${user}!`);
    };


    const generarCarton = () => {
        const carton = new Set(); // Se crea un set para evitar repeticiones.

        while (carton.size < 12) { // Mientras el cartón no tenga 15 elementos.
            const numero = Math.floor(Math.random() * 30) + 1; // Generamos un numero aleatorio entre 1 y 30.
            carton.add(numero); // Añadimos el numero al set.
        }

        return Array.from(carton); // Convertimos el set en un array.
    };



    const mostrarCarton = (user, carton) => {
        // Ordena el carton de menor a mayor
        carton.sort((a, b) => a - b); // Utiliza el método sort para ordenar el cartón numéricamente

        const rows = []; // Crea una matriz vacía para almacenar las filas del cartón
        for (let i = 0; i < 3; i++) { // Bucle externo para crear las tres filas del cartón
            const row = {}; // Crea un objeto vacío para representar cada fila del cartón
            for (let j = 0; j < 4; j++) { // Bucle interno para las cuatro columnas de cada fila
                // Asigna cada número del cartón a una columna específica en el objeto 'row'
                row[`Columna ${j + 1}`] = carton[i * 4 + j];
                // i * 4 + j es la manera de acceder a cada número en el cartón, organizado en filas y columnas
            }
            rows.push(row); // Agrega la fila completada a la matriz 'rows'
        }
        // Imprime el encabezado del cartón con el nombre del usuario
        console.log(`Cartón de ${user}:`);
        // Imprime el cartón en formato de tabla en la consola
        console.table(rows); // Muestra el cartón como una tabla en la consola
    };
    const generarNuevoCarton = () => {
        let carton;
        let jugar = true;

        while (jugar) {
            const otroCarton = readlineSync.question("¿Deseas otro cartón? (Si/No)").toLowerCase();

            if (otroCarton === 'no') {
                carton = generarCarton(); // Genera un nuevo cartón
                jugar = false; // Sal del bucle
            } else if (otroCarton === 'si') {
                carton = generarCarton(); // Genera un nuevo cartón
                mostrarCarton(user, carton); // Muestra el cartón
            } else {
                console.log("Opción no válida. Por favor, responde con 'Si' o 'No'.");
            }
        }

        return carton;
    }


    const turno = (carton) => {
        const randomNum = Math.floor(Math.random() * 30) + 1; // Generamos un numero aleatorio entre 1 y 30.
        console.log(`El numero es: ${randomNum}`); // Mostramos el numero aleatorio.

        if (carton.includes(randomNum)) { // Verificamos si el numero existe en el cartón.
            const index = carton.indexOf(randomNum); // Obtenemos el indice del numero.
            carton[index] = "X"; // Cambiamos el numero por una X.
            console.log(`El numero ${randomNum} ha sido encontrado.`);
        } else {
            console.log(`El numero ${randomNum} no ha sido encontrado en tu cartón.`);
        }

        mostrarCarton(user, carton);
        return carton;
    };



    const linea = (carton) => {
        if (!lineaCantada) {
            const filas = [
                carton.slice(0, 5),
                carton.slice(5, 10),
                carton.slice(10, 15)
            ];
            for (let fila of filas) {
                if (fila.every(element => element === 'X')) {
                    console.log("¡LINEA!");
                    lineaCantada = true;
                }
            }
        }
    };


    const calcularPuntaje = (turnos) => {
        // Calculamos el puntaje basado en los turnos
        const puntaje = puntosBase - turnos;

        // Aseguramos que el puntaje no sea negativo
        return puntaje >= 0 ? puntaje : 0;
    };

    const nuevoTurno = (carton) => {
        let continuar = true;
        while (continuar && !carton.every(element => element === 'X')) {
            const answer = readlineSync.question("¿Deseas seguir jugando? (Si/No)").toLowerCase();
            if (answer === "no") {
                console.log('¡Gracias por jugar!');
                continuar = false;
            } else {
                carton = turno(carton);
                linea(carton);
                turnos++;
                console.log(`Turno ${turnos}`);
            }
        }
        if (carton.every(element => element === 'X')) {
            const puntaje = calcularPuntaje(turnos); // Calculamos el puntaje al finalizar la partida
            console.log(`¡Bingo! Has completado el cartón en ${turnos} turnos.`);
            console.log(`Tu puntaje es: ${puntaje}`);
        }
        return carton;
    };

    const nuevaPartida = () => {
        const jugarNuevamente = readlineSync.question("¿Deseas jugar otra partida? (Si/No)").toLowerCase();
        if (jugarNuevamente === "si") {
            lineaCantada = false; // Restablece la variable para la nueva partida
            turnos = 0; // Restablece el contador de turnos para la nueva partida
            bingo(); // Inicia un nuevo juego
        } else {
            console.log("¡Hasta la próxima!");
        }

    };


    const user = readlineSync.question("Bienvenido al Bingo!. Introduce tu nombre de jugador: ");
    bingoGame(user);
    mostrarSistemaPuntos();
    let carton = generarCarton();
    mostrarCarton(user, carton);
    generarNuevoCarton();
    nuevoTurno(carton);
    nuevaPartida()

};

bingo();