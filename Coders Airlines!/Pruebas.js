// This is a example of array of objects... each position of array contains one object...
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];


const readline = require("readline-sync");

const userInterface = () => {

    userName = readline.question(`Bienvenido.Indíquenos su nombre porfavor: `);

    readline.question(`Encantado ${userName}, en la consola se le mostrarán los vuelos disponibles para el día de hoy: `);
    for (let i = 0; i < flights.length; i++) {
        const everyFlight = flights[i];
        console.log(everyFlight)

    }
}

userInterface()


const sliceFligths = (start, end) => flights.slice(start, end);

const last5Destinations = sliceFligths(-5, flights.length)

const lastDestination = last5Destinations.map(flight => flight.to)

console.log(lastDestination)