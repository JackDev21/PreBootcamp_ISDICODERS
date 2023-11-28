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

const isAdmin = () => {
  let userAdmin = "";
  while (true) {
    userAdmin = readline.question("¿Eres ADMIN o USUARIO?: ").toLowerCase();
    if (userAdmin === "admin" || userAdmin === "usuario") {
      return userAdmin === "admin";
    } else {
      console.log("Por favor, introduce 'admin' o 'usuario'.");
    }
  }
}
const addFlight = () => {
  console.log("Añadiendo vuelo...");
  let addingFlights = true;

  while (addingFlights && flights.length <= 15) {
    const newFlight = {
      id: flights.length,
      to: readline.question("Introduce el nuevo vuelo de destino: "),
      from: readline.question("Introduce el nuevo vuelo de origen: "),
      cost: readline.question("Introduce el coste del nuevo vuelo: "),
      layover: readline.question("¿Realiza escala? (Si/No): ").toLowerCase() === "si",
    };

    flights.push(newFlight);
    console.log("Vuelo añadido.");

    addingFlights = readline.question("¿Quieres añadir otro vuelo? (Si/No): ").toLowerCase() === "si";
  }

  if (flights.length >= 15) {
    console.log("No puedes añadir más vuelos. La cantidad máxima es 15.");

  }
}

const deleteFlightById = () => {
  const idToDelete = parseInt(readline.question("Introduce el ID del vuelo a eliminar: "));
  const indexToDelete = flights.findIndex((flight) => flight.id === idToDelete);

  if (indexToDelete !== -1) {
    flights.splice(indexToDelete, 1);
    console.log(`Vuelo con ID ${idToDelete} eliminado.`);
    displayFlights();

    let continueDeleting = readline.question("¿Quieres eliminar otro vuelo? (Si/No): ").toLowerCase();
    if (continueDeleting === "si") {
      deleteFlightById();
    } else {
      let continueAdmin = readline.question("¿Quieres realizar otra operacion? (Si/No): ").toLowerCase();
      if (continueAdmin === "si") {
        interfaceUser();
      } else if (continueAdmin !== "si") {
        console.log("Gracias por utilizar la aplicación de la aerolinea");
        process.exit();
      }
    }
  } else {
    console.log("ID de vuelo no encontrado.");
  }
};


const displayFlights = () => {
  console.log("Lista de vuelos actualizada:");
  for (const flight of flights) {
    console.log(`ID: ${flight.id}, Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}€, Escala: ${flight.layover ? 'Sí' : 'No'}`);

  };

}

const searchByPrice = (maxPrice) => {
  return flights.filter(flight => flight.cost <= maxPrice);
}


const interfaceUser = () => {
  console.log("Bienvenido a la Aerolinea")
  let userName = "";
  let admin = isAdmin();

  if (admin) {
    console.log("Modo ADMIN activado.");
    addFlight();
    const deleteFligth = readline.question("¿Quieres eliminar un vuelo? (Si/No): ").toLowerCase() === "si";
    if (deleteFligth) {
      deleteFlightById()
    } else {
      console.log("Gracias por utilizar la aplicación de la aerolinea");
      return
    }

  } else {
    console.log("Modo USUARIO activado.");
  }

  while (userName === "" || !isNaN(userName)) {
    userName = readline.question("Bienvenido a la aerolinea. Por favor, introduce tu nombre de usuario: ");
    if (userName === "" || !isNaN(userName)) {
      console.log("No has introducido un nombre válido. Por favor, introduce tu nombre de usuario");
    } else {
      console.log(`Bienvenido ${userName}, estos son los vuelos disponibles: `);
    }
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

  let findByPrice = readline.question("¿Buscar vuelos por precios? (si/no): ").toLowerCase() === "si";
  while (findByPrice) {
    const maxPrice = readline.question("Precio máximo: ");
    const foundFlights = searchByPrice(maxPrice);
    if (foundFlights.length > 0) {
      console.log(`Vuelos con precio igual o menor a ${maxPrice}€:`);
      for (const flight of flights) {
        console.log(`Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}, Escala: ${flight.layover}`);
      };
    } else {
      console.log(`No se encuentran vuelos por debajo de ${maxPrice}€`);
    }

    const continueOperations = readline.question("¿Quieres realizar otra operación? (Si/No): ").toLowerCase();
    if (continueOperations !== "si") {
      console.log("Gracias por utilizar la aplicación de la aerolinea");
      return;
    }
    findByPrice = readline.question("¿Buscar más vuelos por precios? (si/no): ").toLowerCase() === "si";
  }

  console.log("Gracias por utilizar la aplicación de la aerolinea");
}



interfaceUser();