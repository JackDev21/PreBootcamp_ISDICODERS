const questions = [
    {
        letter: "a",
        answer: "Apu",
        status: false,
        question: " Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?",
    },
    {
        letter: "b",
        answer: "Bart",
        status: false,
        question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?",
    },
    {
        letter: "c",
        answer: "Central Nuclear",
        status: false,
        question: "Con la C: ¿Donde trabaja Homer Simpson?",
    },
    {
        letter: "d",
        answer: "Duff",
        status: false,
        question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?",
    },
    {
        letter: "e",
        answer: "Edna",
        status: false,
        question: "Con la E: ¿Quién es la maestra de Bart Simpson?",
    },
    {
        letter: "f",
        answer: "Flanders",
        status: false,
        question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?",
    },
    {
        letter: "g",
        answer: "Grafiti",
        status: false,
        question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?",
    },
    {
        letter: "h",
        answer: "Homer",
        status: false,
        question: "Con la H: ¿Quién es el padre de la familia Simpson?",
    },
    {
        letter: "i",
        answer: "Itchy",
        status: false,
        question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?",
    },
    {
        letter: "j",
        answer: "Jebediah Springfield",
        status: false,
        question: "Con la J: ¿Quién es el fundador de Springfield?",
    },
    {
        letter: "k",
        answer: "Krusty",
        status: false,
        question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?",
    },
    {
        letter: "l",
        answer: "Lisa Simpson",
        status: false,
        question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?",
    },
    {
        letter: "m",
        answer: "Maggie",
        status: false,
        question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?",
    },
    {
        letter: "n",
        answer: "Ned Flanders",
        status: false,
        question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?",
    },
    {
        letter: "ñ",
        answer: "Ñu",
        status: false,
        question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?",
    },

    {
        letter: "o",
        answer: "Otto",
        status: false,
        question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?",
    },
    {
        letter: "p",
        answer: "Patty",
        status: false,
        question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?",
    },
    {
        letter: "q",
        answer: "Quimby",
        status: false,
        question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
    },
    {
        letter: "r",
        answer: "Ralph",
        status: false,
        question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?",
    },
    {
        letter: "s",
        answer: "Selma",
        status: false,
        question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?",
    },
    {
        letter: "t",
        answer: "Troy McClure",
        status: false,
        question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?",
    },
    {
        letter: "u",
        answer: "Universidad",
        status: false,
        question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",
    },
    {
        letter: "v",
        answer: "Violín",
        status: false,
        question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?",
    },

    {
        letter: "w",
        answer: "Waylon Smithers",
        status: false,
        question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?",
    },
    {
        letter: "x",
        answer: "Expediente X",
        status: false,
        question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?",
    },
    {
        letter: "y",
        answer: "Yeti",
        status: false,
        question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
    },
    {
        letter: "z",
        answer: "Zia",
        status: false,
        question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?",
    },
];

console.log(questions.length)


let currentQuestionIndex = 0;
const showQuestion = () => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const questionDisplay = document.querySelector('.question');
        const questionText = questions[currentQuestionIndex].question;
        questionDisplay.textContent = questionText;

    }
}


const showResult = () => {
    const start = document.querySelector('#btn-start');
    start.style.display = 'none'; // Oculta el botón de inicio

    const result = document.querySelector('.result-container .result'); // Selecciona el elemento de resultado
    result.textContent = `Respuestas correctas: ${correctAnswer} Respuestas incorrectas: ${incorrectAnswer}`; // Actualiza el texto del elemento de resultado

}


let scoreValue = 27; // Define el valor inicial del puntaje fuera de la función

let correctAnswer = 0;
let incorrectAnswer = 0;
const letter = document.querySelectorAll('.letter');

const checkAnswer = () => {
    const score = document.querySelector('.score'); // Selecciona el elemento de puntaje
    const userAnswer = document.querySelector("#txtAnswer").value; // Obtén el valor del input
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) { // Comprueba si la respuesta es correcta
        letter[currentQuestionIndex].classList.add("correct-answer") // Agrega la clase correct-answer al elemento correspondiente
        scoreValue--; // Resta uno del puntaje si la respuesta es correcta
        correctAnswer++; // Incrementa el contador de respuestas correctas
    } else {
        letter[currentQuestionIndex].classList.add("incorrect-answer");
        incorrectAnswer++ // Incrementa el contador de respuestas incorrectas
    }
    currentQuestionIndex++; // Incrementa el índice de preguntas
    showQuestion();
    score.textContent = scoreValue; // Actualiza el contenido del elemento de puntaje

    // Limpia el campo de respuesta después de comprobar
    document.querySelector("#txtAnswer").value = '';
}
// Asigna la función checkAnswer al evento click del botón
document.querySelector('#btnsend').addEventListener('click', checkAnswer);


const pasarPalabra = (question) => {
    if (currentQuestionIndex < questions.length) { // Si el índice es menor que el tamaño de la lista de preguntas seguimos 
        letter[currentQuestionIndex].classList.add("pasapalabra-answer");
        const wordPased = questions.splice(currentQuestionIndex - 1, 0)[0]; // Quita la palabra de la lista de preguntas y la asigna a la variable wordPased y elimina el elemento y resta -1 para ajustar el índice y no cambiar el orden
        questions.push(wordPased); // Agrega la palabra a la última posición de la lista de preguntas (el último elemento del array)
        currentQuestionIndex++
        question.status = true // Actualiza el estado de la pregunta
        showQuestion();

    }
}
// Asigna la función pasapalabra al evento click del botón
const pasapalabraButton = document.querySelector('#btnpasapalabra');
pasapalabraButton.addEventListener('click', pasarPalabra);



let crono;
const timeDisplay = () => {
    const timer = document.querySelector('.timer');
    let timeValue = 60;

    // Actualiza el tiempo cada segundo (1000 milisegundos)
    crono = setInterval(() => { // setInterval() devuelve un identificador del intervalo
        timer.innerHTML = timeValue;
        timeValue--;

        // Cuando el tiempo llegue a 0, limpia el intervalo para detener el contador
        if (timeValue < 0) {
            showResult(); // Llama a la función showResult() para mostrar el resultado final
            clearInterval(crono); // clearInterval() elimina el intervalo con el identificador dado
            endGameDisplay.style.display = 'flex';
            panelGame.style.visibility = 'hidden';
        }
    }, 1000);
};


const endGameDisplay = document.querySelector('.end-game');
const panelGame = document.querySelector('.panel-game');
const close = document.querySelector('#btnclose');
const endGame = () => {
    clearInterval(crono);
    showResult();
    endGameDisplay.style.display = 'flex';
    panelGame.style.visibility = 'hidden'; // El elemento se oculta pero mantiene su espacio.

}
close.addEventListener('click', endGame);


let gameStarted = false; // Variable para verificar si el juego ya ha sido iniciado
const start = document.querySelector('#btn-start');
const startGame = () => {
    if (!gameStarted) { // Verifica si el juego ya ha sido iniciado
        gameStarted = true; // Marca el juego como iniciado
        start.disabled = true; // Deshabilita el botón de inicio una vez que se inicia el juego
        timeDisplay();
        showQuestion();
    }

}
start.addEventListener('click', startGame);