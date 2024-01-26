const questions = [
    {
        letter: "a",
        answer: "Apu",
        question: " Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?",
        status: 0,
    },
    {
        letter: "b",
        answer: "Bart",
        question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?",
        status: 0,
    },
    {
        letter: "c",
        answer: "Central Nuclear",
        question: "Con la C: ¿Donde trabaja Homer Simpson?",
        status: 0,
    },
    {
        letter: "d",
        answer: "Duff",
        question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?",
        status: 0,
    },
    {
        letter: "e",
        answer: "Edna",
        question: "Con la E: ¿Quién es la maestra de Bart Simpson?",
        status: 0,
    },
    {
        letter: "f",
        answer: "Flanders",
        question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?",
        status: 0,
    },
    {
        letter: "g",
        answer: "Grafiti",
        question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?",
        status: 0,
    },
    {
        letter: "h",
        answer: "Homer",
        question: "Con la H: ¿Quién es el padre de la familia Simpson?",
        status: 0,
    },
    {
        letter: "i",
        answer: "Itchy",
        question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?",
        status: 0,
    },
    {
        letter: "j",
        answer: "Jebediah Springfield",
        question: "Con la J: ¿Quién es el fundador de Springfield?",
        status: 0,
    },
    {
        letter: "k",
        answer: "Krusty",
        question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?",
        status: 0,
    },
    {
        letter: "l",
        answer: "Lisa Simpson",
        question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?",
        status: 0,
    },
    {
        letter: "m",
        answer: "Maggie",
        question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?",
        status: 0,
    },
    {
        letter: "n",
        answer: "Ned Flanders",
        question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?",
        status: 0,
    },
    {
        letter: "ñ",
        answer: "Ñu",
        question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?",
        status: 0,
    },

    {
        letter: "o",
        answer: "Otto",
        question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?",
        status: 0,
    },
    {
        letter: "p",
        answer: "Patty",
        question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?",
        status: 0,
    },
    {
        letter: "q",
        answer: "Quimby",
        question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
        status: 0,
    },
    {
        letter: "r",
        answer: "Ralph",
        question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?",
        status: 0,
    },
    {
        letter: "s",
        answer: "Selma",
        question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?",
        status: 0,
    },
    {
        letter: "t",
        answer: "Troy McClure",
        question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?",
        status: 0,
    },
    {
        letter: "u",
        answer: "Universidad",
        question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",
        status: 0,
    },
    {
        letter: "v",
        answer: "Violín",
        question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?",
        status: 0,
    },

    {
        letter: "w",
        answer: "Waylon Smithers",
        question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?",
        status: 0,
    },
    {
        letter: "x",
        answer: "Expediente X",
        question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?",
        status: 0,
    },
    {
        letter: "y",
        answer: "Yeti",
        question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
        status: 0,
    },
    {
        letter: "z",
        answer: "Zia",
        question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?",
        status: 0,
    },
];



let currentQuestionIndex = -1;
let scoreValue = 27; // Define el valor inicial del puntaje fuera de la función
let correctAnswer = 0;
let incorrectAnswer = 0;
let gameStarted = false; // Variable para verificar si el juego ya ha sido iniciado
let crono;

const start = document.querySelector('#btn-start');
const startGame = () => {
    if (!gameStarted) { // Verifica si el juego ya ha sido iniciado
        currentQuestionIndex++
        gameStarted = true; // Marca el juego como iniciado
        start.disabled = true; // Deshabilita el botón de inicio una vez que se inicia el juego
        timeDisplay();
        showQuestion();
    }

}
start.addEventListener('click', startGame);




const showQuestion = () => {

    if (currentQuestionIndex < questions.length) { // Verifica si hay preguntas restantes
        const questionDisplay = document.querySelector('.question');
        const questionText = questions[currentQuestionIndex].question; // Asigna el texto de la pregunta
        questionDisplay.textContent = questionText; // Actualiza el texto de la pregunta
    }
}

const showResult = () => {
    const start = document.querySelector('#btn-start');
    start.style.display = 'none'; // Oculta el botón de inicio

    const result = document.querySelector('.result-container .result'); // Selecciona el elemento de resultado
    result.textContent = `Respuestas correctas: ${correctAnswer} Respuestas incorrectas: ${incorrectAnswer}`; // Actualiza el texto del elemento de resultado
}



const letter = document.querySelectorAll('.letter');

const checkAnswer = () => {
    const score = document.querySelector('.score');
    const userAnswer = document.querySelector("#txtAnswer").value;

    if (currentQuestionIndex < questions.length) {
        /*if (userAnswer === "") {
            return;
        }*/

        if (userAnswer.toLowerCase().trim() === questions[currentQuestionIndex].answer.toLowerCase().trim()) {
            letter[currentQuestionIndex].classList.add("correct-answer");
            correctAnswer++;
            scoreValue--;
            currentQuestionIndex++;
        } else {
            letter[currentQuestionIndex].classList.add("incorrect-answer");
            incorrectAnswer++;
            currentQuestionIndex++;
        }
        if (currentQuestionIndex === questions.length) {
            showUnansweredQuestions();
        }

        // Actualiza el contenido del elemento de puntaje
        score.textContent = scoreValue;
        questions[currentQuestionIndex].status = 1;
        // Limpia el campo de respuesta después de comprobar
        document.querySelector("#txtAnswer").value = '';

        // Muestra la siguiente pregunta
        showQuestion();
    }
}
// Asigna la función checkAnswer al evento click del botón
const send = document.querySelector('#btnsend')
send.addEventListener('click', checkAnswer);

const pasapalabra = () => {
    if (currentQuestionIndex < questions.length) {
        // Marcar como pasapalabra y avanzar a la siguiente pregunta
        letter[currentQuestionIndex].classList.add("pasapalabra-answer");
        questions[currentQuestionIndex].status = 2;
        currentQuestionIndex++;
        // Verificar si se llegó al final y mostrar las preguntas sin responder
        if (currentQuestionIndex === questions.length) {
            showUnansweredQuestions();
        } else {
            showQuestion();
        }
    }
};



const pasapalabraButton = document.querySelector('#btnpasapalabra');
pasapalabraButton.addEventListener('click', pasapalabra);

const showUnansweredQuestions = () => {
    const unansweredQuestions = questions.filter(q => q.status === 2);
    if (unansweredQuestions.length > 0) {
        questions.push(...unansweredQuestions); // Agrega las preguntas sin responder al final del array
        currentQuestionIndex = questions.length - unansweredQuestions.length; // Reinicia el índice al inicio de las preguntas sin responder
        showQuestion(); // Muestra la primera pregunta sin responder

    } else {
        // Si no hay preguntas sin responder, muestra el resultado final
        endGame();
    }
}


const timeDisplay = () => {

    const timer = document.querySelector('.timer');
    let timeValue = 30;

    // Actualiza el tiempo cada segundo (1000 milisegundos)
    crono = setInterval(() => { // setInterval() devuelve un identificador del intervalo
        timer.innerHTML = timeValue;
        timeValue--;

        // Cuando el tiempo llegue a 0, limpia el intervalo para detener el contador
        if (timeValue < 0) {
            endGame();
        }
    }, 1000);
};


const endGameDisplay = document.querySelector('.end-game');
const panelGame = document.querySelector('.panel-game');
const close = document.querySelector('#btnclose');
const closeGame = () => {
    endGame();
}
close.addEventListener('click', closeGame);

const endGame = () => {
    clearInterval(crono);
    showResult();
    showUnansweredQuestions(); // Llama a la función para mostrar preguntas no respondidas
    endGameDisplay.style.display = 'flex';
    panelGame.style.visibility = 'hidden';
}
