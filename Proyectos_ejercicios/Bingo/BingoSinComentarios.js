const readlineSync = require("readline-sync");

let ranking = [];

const bingo = () => {
    let lineaCantada = false;
    let turnos = 0;
    const puntosBase = 200;

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
        const carton = new Set();

        while (carton.size < 9) {
            const numero = Math.floor(Math.random() * 20) + 1;
            carton.add(numero);
        }
        return Array.from(carton);
    };

    const mostrarCarton = (user, carton) => {
        carton.sort((a, b) => a - b);

        const rows = [];
        for (let i = 0; i < 3; i++) {
            const row = {};
            for (let j = 0; j < 3; j++) {
                row[`Columna ${j + 1}`] = carton[i * 3 + j];
            }
            rows.push(row);
        }
        console.log(`Cartón de ${user}:`);
        console.table(rows);
    };

    const generarNuevoCarton = () => {
        let carton;
        let jugar = true;

        while (jugar) {
            const otroCarton = readlineSync.question("¿Deseas otro cartón? (Si/No)").toLowerCase();

            if (otroCarton === 'no') {
                carton = generarCarton();
                jugar = false;
            } else if (otroCarton === 'si') {
                carton = generarCarton();
                mostrarCarton(user, carton);
            } else {
                console.log("Opción no válida. Por favor, responde con 'Si' o 'No'.");
            }
        }
        return carton;
    };

    const turno = (carton) => {
        const randomNum = Math.floor(Math.random() * 30) + 1;
        console.log(`El numero es: ${randomNum}`);

        if (carton.includes(randomNum)) {
            const index = carton.indexOf(randomNum);
            carton[index] = "X";
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
                carton.slice(0, 3),
                carton.slice(3, 6),
                carton.slice(6, 9)
            ];
            for (let fila of filas) {
                if (fila.every(element => element === 'X')) {
                    console.log("¡LINEA!");
                    lineaCantada = true;
                }
            }
        }
    };

    const nuevoTurno = (carton, user) => {
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
            const puntos = calcularPuntos(turnos, user);
            console.log(`¡Bingo! Has completado el cartón en ${turnos} turnos.`);
            console.log(`Has obtenido una puntación de: ${puntos}`);
        }
        return carton;
    };

    const nuevaPartida = () => {
        const jugarNuevamente = readlineSync.question("¿Deseas jugar otra partida? (Si/No)").toLowerCase();
        if (jugarNuevamente === "si") {
            lineaCantada = false;
            turnos = 0;
            bingo();
        } else {
            console.log("¡Hasta la próxima!");
        }
    };

    const calcularPuntos = (turnos, user) => {
        const puntos = puntosBase - turnos;
        const puntosFinal = puntos >= 0 ? puntos : 0;
        ranking.push({ user: user, puntos: puntosFinal });
        return puntosFinal;
    };

    const mostrarRanking = () => {
        ranking.sort((a, b) => b.puntos - a.puntos);

        console.log('\nRanking de Usuarios:');
        ranking.forEach((element, index) => {
            console.log(`${index + 1}. ${element.user} - ${element.puntos} puntos`)
        })
    };

    const user = readlineSync.question("Bienvenido al Bingo!. Introduce tu nombre de jugador: ");
    bingoGame(user);
    mostrarSistemaPuntos();
    let carton = generarCarton();
    mostrarCarton(user, carton);
    generarNuevoCarton();
    nuevoTurno(carton, user);
    mostrarRanking();
    nuevaPartida()
};

bingo();
