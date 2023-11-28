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

// Importación de la librería para leer la entrada del usuario desde la consola
const readline = require("readline-sync");

// Función que determina si el usuario es un administrador
const isAdmin = () => {
  let userAdmin = "";
  while (true) {
    // Solicita al usuario que especifique si es admin o usuario
    userAdmin = readline.question("¿Eres ADMIN o USUARIO?: ").toLowerCase();
    // Verifica si la entrada es 'admin' o 'usuario' y devuelve un booleano
    if (userAdmin === "admin" || userAdmin === "usuario") {
      return userAdmin === "admin";
    } else {
      console.log("Por favor, introduce 'admin' o 'usuario'.");
    }
  }
}

// Función para agregar vuelos a la lista de vuelos
const addFlight = () => {
  console.log("Añadiendo vuelo...");
  let addingFlights = true;

  // Bucle para permitir la adición de múltiples vuelos hasta alcanzar un límite
  while (addingFlights && flights.length <= 15) {
    // Solicita información sobre el nuevo vuelo y lo agrega a la lista
    const newFlight = {
      id: flights.length,
      to: readline.question("Introduce el nuevo vuelo de destino: "),
      from: readline.question("Introduce el nuevo vuelo de origen: "),
      cost: readline.question("Introduce el coste del nuevo vuelo: "),
      layover: readline.question("¿Realiza escala? (Si/No): ").toLowerCase() === "si",
    };

    flights.push(newFlight);
    console.log("Vuelo añadido.");

    // Pregunta si se desea agregar otro vuelo
    addingFlights = readline.question("¿Quieres añadir otro vuelo? (Si/No): ").toLowerCase() === "si";
  }

  // Muestra un mensaje si se alcanza el límite máximo de vuelos
  if (flights.length >= 15) {
    console.log("No puedes añadir más vuelos. La cantidad máxima es 15.");
  }
}

// Función para eliminar un vuelo por su ID
const deleteFlightById = () => {
  // Solicita el ID del vuelo que se desea eliminar
  const idToDelete = parseInt(readline.question("Introduce el ID del vuelo a eliminar: "));
  // Encuentra el índice del vuelo en base a su ID
  const indexToDelete = flights.findIndex((flight) => flight.id === idToDelete);

  if (indexToDelete !== -1) { // Verifica si el índice es distinto de -1 (que indica que el vuelo fue encontrado)
    // Elimina el vuelo de la lista y muestra un mensaje
    flights.splice(indexToDelete, 1); // Elimina el vuelo de la lista en el índice encontrado
    console.log(`Vuelo con ID ${idToDelete} eliminado.`);
    // Muestra la lista actualizada de vuelos
    displayFlights();

    // Pregunta si se quiere eliminar otro vuelo o realizar otra operación
    let continueDeleting = readline.question("¿Quieres eliminar otro vuelo? (Si/No): ").toLowerCase();
    if (continueDeleting === "si") {
      deleteFlightById();
    } else {
      let continueAdmin = readline.question("¿Quieres realizar otra operacion? (Si/No): ").toLowerCase();
      if (continueAdmin === "si") {
        interfaceUser();
      } else if (continueAdmin !== "si") {
        // Mensaje de despedida y finalización del programa
        console.log("Gracias por utilizar la aplicación de la aerolinea");
        process.exit(); // Cierra el programa
      }
    }
  } else {
    console.log("ID de vuelo no encontrado.");
  }
};

// Función para mostrar la lista de vuelos
const displayFlights = () => {
  console.log("Lista de vuelos actualizada:");
  for (const flight of flights) {
    // Muestra cada vuelo con su información
    console.log(`ID: ${flight.id}, Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}€, Escala: ${flight.layover ? 'Sí' : 'No'}`);
  };
}

// Función para buscar vuelos por precio máximo
const searchByPrice = (maxPrice) => {
  return flights.filter(flight => flight.cost <= maxPrice); //
}

showBye = () => {
  console.log("Gracias por utilizar la aplicación de la aerolinea");
}

// Función principal para la interfaz de usuario
const interfaceUser = () => {
  console.log("Bienvenido a la Aerolinea")
  let userName = "";
  let admin = isAdmin();

  // Verifica si el usuario es admin o usuario
  if (admin) {
    console.log("Modo ADMIN activado.");
    // Permite agregar vuelos si es admin
    const addFlights = readline.question("¿Quieres añadir vuelos? (Si/No): ").toLowerCase() === "si";
    if (addFlights) {
      addFlight();
    }
    const deleteFligth = readline.question("¿Quieres eliminar un vuelo? (Si/No): ").toLowerCase() === "si";
    if (deleteFligth) {
      deleteFlightById()
    } else {
      return showBye();
    }
  } else {
    console.log("Modo USUARIO activado.");
  }

  // Solicita al usuario su nombre hasta que se ingrese uno válido
  while (userName === "" || !isNaN(userName)) {
    userName = readline.question("Bienvenido a la aerolinea. Por favor, introduce tu nombre de usuario: ");
    if (userName === "" || !isNaN(userName)) {
      console.log("No has introducido un nombre válido. Por favor, introduce tu nombre de usuario");
    } else {
      console.log(`Bienvenido ${userName}, estos son los vuelos disponibles: `);
    }
  }

  // Muestra la información de los vuelos disponibles
  let totalCoste = 0;
  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    const fligthLayover = flight.layover ? "Realiza escala" : "No realiza escala";
    console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${fligthLayover}.`);
    totalCoste = totalCoste + flight.cost;
  }

  // Calcula el coste promedio de los vuelos
  const costePromedio = totalCoste / flights.length;
  console.log(`El coste promedio de los vuelos es: ${costePromedio}`);

  // Muestra los destinos de los últimos 5 vuelos del día
  console.log("Destinos de los ultimos 5 vuelos del día: ");
  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log("Vuelo:", flights[i].to, "destino", flights[i].from);
  }

  // Búsqueda de vuelos por precios
  let findByPrice = readline.question("¿Buscar vuelos por precios? (si/no): ").toLowerCase() === "si";
  while (findByPrice) { // Mientras se busque por precios 
    const maxPrice = readline.question("Precio máximo: "); // Solicita el precio máximo a buscar
    const foundFlights = searchByPrice(maxPrice); // Busca los vuelos que tengan un coste menor o igual al precio máximo introducido
    if (foundFlights.length > 0) { // Si se encuentran vuelos con un coste menor o igual al precio máximo introducido, los muestra en pantalla
      console.log(`Vuelos con precio igual o menor a ${maxPrice}€:`);
      for (const flight of foundFlights) { // Muestra la información de cada vuelo encontrado
        console.log(`Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}, Escala: ${flight.layover}`);
      };
    } else {
      console.log(`No se encuentran vuelos por debajo de ${maxPrice}€`);
    }


    // Pregunta si se quiere realizar otra operación de búsqueda por precios
    const continueOperations = readline.question("¿Quieres realizar otra operación? (Si/No): ").toLowerCase();
    if (continueOperations !== "si") {
      return showBye();
    }

  }
}

// Inicia la interfaz de usuario
interfaceUser();
