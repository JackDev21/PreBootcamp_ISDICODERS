let numberElement = document.querySelector('.number h1'); // Selecciona el elemento h1 dentro de un elemento con la clase 'number'
let itemIncrement = document.getElementById('increment'); // Obtiene el botón de incremento por su ID
let itemDecrement = document.getElementById('decrement'); // Obtiene el botón de decremento por su ID
let resetButton = document.getElementById('restart'); // Obtiene el botón de reinicio por su ID

let number = 0; // Inicializa la variable 'number' en 0
const maxNumber = 20 // Inicializa la constante 'maxNumber' con el valor 20 para limitar el número de incrementos

const updateNumber = () => {
    numberElement.textContent = number; // Actualiza el contenido del elemento h1 con el valor de 'number'
};

const increment = () => {
    if (number < maxNumber) {
        number++; // Incrementa 'number' en 1
        updateNumber(); // Actualiza el número mostrado en la interfaz
    }
};

itemIncrement.addEventListener('click', increment); // Agrega un evento de clic al botón de incremento que llama a la función 'increment' cuando se hace clic

const decrement = () => {
    if (number > 0) {
        number--; // Decrementa 'number' en 1
        updateNumber(); // Actualiza el número mostrado en la interfaz
    }
};

itemDecrement.addEventListener('click', decrement); // Agrega un evento de clic al botón de decremento que llama a la función 'decrement' cuando se hace clic

const reset = () => {
    number = 0; // Restablece 'number' a 0
    updateNumber(); // Actualiza el número mostrado en la interfaz
};

resetButton.addEventListener('click', reset); // Agrega un evento de clic al botón de reinicio que llama a la función 'reset' cuando se hace clic
