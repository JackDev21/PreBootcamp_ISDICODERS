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

const interfazUsuario = () => {
  const usuarioNombre = readline.question(
    "Bienvenido a la aerolínea. Por favor, introduce tu nombre de usuario: "
  );
  console.log(
    `Bienvenido ${usuarioNombre}, estos son los vuelos disponibles: `
  );

  let totalCoste = 0;
  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    const escalaVuelo = flight.layover ? "Realiza escala" : "No realiza escala";
    console.log(
      `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${escalaVuelo}.`
    );
    totalCoste = totalCoste + flight.cost;
  }

  const costePromedio = totalCoste / flights.length;
  console.log(`El coste promedio de los vuelos es: ${costePromedio}`);

  const vuelosConEscala = flights.filter((flight) => flight.layover);
  console.log(`Hay ${vuelosConEscala.length} vuelos que realizan escalas.`);

  const ultimosVuelos = flights.slice(-5);
  const destinosUltimosVuelos = ultimosVuelos.map((flight) => flight.to);
  console.log(
    `Los destinos de los últimos vuelos del día son: ${destinosUltimosVuelos.join(
      ", "
    )}.`
  );

  const isAdmin =
    readline.question("Eres ADMIN o USER?").toLowerCase() === "admin";
  if (isAdmin) {
    const nuevosVuelos = readline.question(
      "Introduce los nuevos vuelos separados por comas (hasta un máximo de 5):"
    );
    const nuevosVuelosArray = nuevosVuelos
      .split(",")
      .map((vuelo) => vuelo.trim());
    if (flights.length + nuevosVuelosArray.length > 15) {
      alert("No se pueden añadir más vuelos.");
    } else {
      for (let i = 0; i < nuevosVuelosArray.length; i++) {
        const nuevoVuelo = nuevosVuelosArray[i];
        const [to, from, cost, layoverString] = nuevoVuelo.split(" ");
        const layover = layoverString === "con escalas";
        const id = flights[flights.length - 1].id + 1;
        flights.push({ id, to, from, cost: Number(cost), layover });
      }
      readline.question("Los nuevos vuelos han sido añadidos correctamente.");
    }
    const vueloAEliminar = readline.question(
      "Introduce el ID del vuelo que quieres eliminar:"
    );
    const indiceVuelo = flights.findIndex(
      (flight) => flight.id === Number(vueloAEliminar)
    );
    if (indiceVuelo === -1) {
      readline.question("No se ha encontrado ningún vuelo con ese ID.");
    } else {
      flights.splice(indiceVuelo, 1);
      readline.question("El vuelo ha sido eliminado correctamente.");
    }
  } else {
    const precioMaximo = readline.question(
      "Introduce el precio máximo que estás dispuesto a pagar:"
    );
    const vuelosFiltrados = flights.filter(
      (flight) => flight.cost <= Number(precioMaximo)
    );
    console.log(
      `Los vuelos que tienen un coste igual o inferior a ${precioMaximo}€ son:`
    );
    for (let i = 0; i < vuelosFiltrados.length; i++) {
      const flight = vuelosFiltrados[i];
      const escalaVuelo = flight.layover
        ? "Realiza escala"
        : "No realiza escala";
      console.log(
        `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${escalaVuelo}.`
      );
    }
  }
};

interfazUsuario();
