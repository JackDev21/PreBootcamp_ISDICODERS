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



const isAdmin = () => {
    let userAdmin = "";
    while (true) {
        userAdmin = prompt("¿Eres ADMIN o USUARIO?: ").toLowerCase();
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
            to: prompt("Introduce el nuevo vuelo de destino: "),
            from: prompt("Introduce el nuevo vuelo de origen: "),
            cost: prompt("Introduce el coste del nuevo vuelo: "),
            layover: prompt("¿Realiza escala? (Si/No): ").toLowerCase() === "si",
        };

        flights.push(newFlight);
        console.log("Vuelo añadido.");

        addingFlights = prompt("¿Quieres añadir otro vuelo? (Si/No): ").toLowerCase() === "si";
    }

    if (flights.length >= 15) {
        console.log("No puedes añadir más vuelos. La cantidad máxima es 15.");

    }
}

const deleteFlightById = () => {
    const idToDelete = parseInt(prompt("Introduce el ID del vuelo a eliminar: "));
    const indexToDelete = flights.findIndex((flight) => flight.id === idToDelete);

    if (indexToDelete !== -1) {
        flights.splice(indexToDelete, 1);
        console.log(`Vuelo con ID ${idToDelete} eliminado.`);
        displayFlights();

        let continueDeleting = prompt("¿Quieres eliminar otro vuelo? (Si/No): ").toLowerCase();
        if (continueDeleting === "si") {
            deleteFlightById();
        } else {
            let continueAdmin = confirm("¿Quieres realizar otra operacion? (Si/No): ");
            continueAdmin ? interfaceUser() : showBye()
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

const showBye = () => {
    console.log("Gracias por utilizar la aplicación de la aerolinea");
}


const interfaceUser = () => {
    console.log("Bienvenido a la Aerolinea")
    let userName = "";
    let admin = isAdmin();

    if (admin) {
        console.log("Modo ADMIN activado.");
        addFlight();
        const deleteFligth = prompt("¿Quieres eliminar un vuelo? (Si/No): ").toLowerCase() === "si";
        if (deleteFligth) {
            deleteFlightById()
        } else {
            showBye()
        }

    } else {
        console.log("Modo USUARIO activado.");
    }

    while (userName === "" || !isNaN(userName)) {
        userName = prompt("Bienvenido a la aerolinea. Por favor, introduce tu nombre de usuario: ");
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

    let findByPrice = prompt("¿Buscar vuelos por precios? (si/no): ").toLowerCase() === "si";
    while (findByPrice) {
        const maxPrice = prompt("Precio máximo: ");
        const foundFlights = searchByPrice(maxPrice);
        if (foundFlights.length > 0) {
            console.log(`Vuelos con precio igual o menor a ${maxPrice}€:`);
            for (const flight of foundFlights) {
                console.log(`Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}, Escala: ${flight.layover}`);
            };
        } else {
            console.log(`No se encuentran vuelos por debajo de ${maxPrice}€`);
        }

        const continueOperations = prompt("¿Quieres realizar otra operación? (Si/No): ").toLowerCase();
        if (continueOperations !== "si") {
            showBye()
        }
        findByPrice = prompt("¿Buscar más vuelos por precios? (si/no): ").toLowerCase() === "si";
    }

    showBye();
}



