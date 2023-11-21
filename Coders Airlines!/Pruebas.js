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
    const userRole = readline.question("¿Eres ADMIN o USER? ").toUpperCase();

    if (userRole === "ADMIN") {
        adminOptions();
    } else if (userRole === "USER") {
        showFlights();
        searchByPrice();
    } else {
        console.log("Rol no válido. Saliendo del programa.");
    }
};

const showFlights = () => {
    let totalCoste = 0;
    let layovers = 0;

    for (let i = 0; i < flights.length; i++) {
        const flight = flights[i];
        const fligthLayover = flight.layover ? "Realiza escala" : "No realiza escala";
        console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${fligthLayover}.`);
        totalCoste += flight.cost;
        if (flight.layover) {
            layovers++;
        }
    }

    const costePromedio = totalCoste / flights.length;

    console.log(`El coste promedio de los vuelos es: ${costePromedio}`);
    console.log(`Cantidad de vuelos con escala: ${layovers}`);

    showLastFiveDestinations();
    askUserRole();
};

const showLastFiveDestinations = () => {
    console.log("Destinos de los últimos 5 vuelos del día:");
    for (let i = flights.length - 5; i < flights.length; i++) {
        console.log("Vuelo:", flights[i].to, "destino", flights[i].from);
    }
};

const askUserRole = () => {
    const userRole = readline.question("¿Eres ADMIN o USER? ").toUpperCase();
    if (userRole === "ADMIN") {
        adminOptions();
    } else if (userRole === "USER") {
        searchByPrice();
    } else {
        console.log("Rol no válido. Saliendo del programa.");
    }
};

const adminOptions = () => {
    let option = "";
    while (option !== "EXIT") {
        console.log("Opciones ADMIN:");
        console.log("1. Añadir vuelo");
        console.log("2. Eliminar vuelo por ID");
        console.log("3. Salir");
        option = readline.question("Elige una opción: ");

        switch (option) {
            case "1":
                if (flights.length >= 15) {
                    console.log("No se pueden agregar más vuelos. Límite alcanzado (15 vuelos).");
                } else {
                    addFlight();
                }
                break;
            case "2":
                deleteFlightById();
                break;
            case "3":
                option = "EXIT";
                break;
            default:
                console.log("Opción no válida.");
        }
    }
};

const addFlight = () => {
    const newFlight = {
        id: flights.length,
        to: readline.question("Introduce el destino del nuevo vuelo: "),
        from: readline.question("Introduce el origen del nuevo vuelo: "),
        cost: parseInt(readline.question("Introduce el coste del nuevo vuelo: ")),
        layover: readline.question("¿Realiza escala? (true/false): ") === "true",
    };

    flights.push(newFlight);
    console.log("Vuelo añadido exitosamente.");
};

const deleteFlightById = () => {
    const idToDelete = parseInt(readline.question("Introduce el ID del vuelo a eliminar: "));
    const indexToDelete = flights.findIndex((flight) => flight.id === idToDelete);

    if (indexToDelete !== -1) {
        flights.splice(indexToDelete, 1);
        console.log(`Vuelo con ID ${idToDelete} eliminado.`);
    } else {
        console.log("ID de vuelo no encontrado.");
    }
};

const searchByPrice = () => {
    const price = parseInt(readline.question("Introduce el precio máximo: "));
    const filteredFlights = flights.filter((flight) => flight.cost <= price);

    if (filteredFlights.length === 0) {
        console.log("No hay vuelos disponibles por ese precio o menos.");
    } else {
        console.log(`Vuelos disponibles por ${price}€ o menos:`);
        filteredFlights.forEach((flight) => {
            console.log(`Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}€`);
        });
    }
};

interfaceUser();
