/*Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

- Se preguntará por el nombre de usuario y dará la bienvenida.
- El usuario visualizará todos los vuelos disponibles de una forma amigable:
    El vuelo con origen: _Barcelona_, y destino: _Madrid_ tiene un coste de _XXXX€_ y no realiza _ninguna_ escala.
- A continuación, el usuario verá el coste medio de los vuelos.
- También podrá ver cuantos vuelos efectúan escalas.
- Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. */

// Después de ver toda la información de la primera versión, el programa pedirá al usuario si es ADMIN/USER mediante un prompt(),
// dependiendo de la elección, el programa se comportará de la siguiente manera:

// Si eres ADMIN, la función debería permitir:

// Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
// Poder eliminar vuelos mediante el ID.
// Si eres USER la función debería permitir:

// El usuario debe poder buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.

const flights = [
  { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
  { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
  { id: 2, to: "Paris", from: "Barcelona", cost: 210, layover: false },
  { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
  { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
  { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
  { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
  { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
  { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
  { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const readline = require("readline-sync");

const interfaceUser = () => {
  let userName = "";
  let intentos = 0
  while (intentos < 2 && !isNaN(userName)) {
    userName = readline.question("Bienvenido a la aerolinea. Por favor, introduce tu nombre de usuario: ");
    if (!isNaN(userName)) {
      console.log("No has introducido ningun nombre. Por favor, introduce tu nombre de usuario");

    } else {
      console.log(`Bienvenido ${userName}, estos son los vuelos disponibles: `);
    }
    intentos++;
  }
  if (!isNaN(userName)) {
    console.log("Has superado el número de intentos.");
    return;
  }

  let totalCoste = 0;

  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    const fligthLayover = flight.layover ? "Realiza escala" : "No realiza escala";
    console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${fligthLayover}.`);
    totalCoste = totalCoste + flight.cost;
  }

  const costePromedio = totalCoste / flights.length;

  console.log(`El coste promedio de los vuelos es: ${costePromedio}`);


  console.log("Destinos de los ultimos 5 vuelos del día: ");
  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log("Vuelo:", flights[i].to, "destino", flights[i].from);

  }
};

interfaceUser();
