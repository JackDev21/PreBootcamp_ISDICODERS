
const questions = [
    {
        letter: "a",
        answer: "mario",
        status: 0,
        question:
            "CONTIENE LA A. Personaje principal de Mario Bros.",
    },
    {
        letter: "b",
        answer: "bowser",
        status: 0,
        question:
            "CON LA B. Enemigo que lanza hachas en los castillos de Mario.",
    },
    {
        letter: "c",
        answer: "princesa peach",
        status: 0,
        question: "CONTIENE LA C. Princesa a menudo secuestrada por Bowser en Mario Bros.",
    },
    {
        letter: "d",
        answer: "donkey kong",
        status: 0,
        question:
            "CON LA D. Gorila que acompaña a Mario en algunas aventuras.",
    },
    {
        letter: "e",
        answer: "planta Piraña",
        status: 0,
        question:
            "CONTIENE LA E. Planta carnívora que aparece en tuberías.",
    },
    {
        letter: "f",
        answer: "",
        status: 0,
        question: "CON LA F. ",
    },
    {
        letter: "g",
        answer: "goomba",
        status: 0,
        question:
            "CON LA G. Enemigo que lanza bolas de fuego."
    },
    {
        letter: "h",
        answer: "Hongo de Crecimiento",
        status: 0,
        question: "CON LA H. Hongo que hace crecer a Mario.",
    },
    {
        letter: "i",
        answer: "daisy",
        status: 0,
        question: "CON LA I. Princesa de Sarasaland",
    },
    {
        letter: "j",
        answer: "jefe trueno",
        status: 0,
        question:
            "CON LA J. Nombre del enemigo con forma de nube que lanza rayos y aparece en varios juegos de Mario Bros",
    },
    {
        letter: "k",
        answer: "kart",
        status: 0,
        question:
            "CON LA K. Vehiculo utilizado en las carreras de Mario.",
    },
    {
        letter: "l",
        answer: "Luigi",
        status: 0,
        question: "CON LA L. Compañero y amigo de Mario durante las aventuras.",
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
    },
    {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
            "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
        letter: "p",
        answer: "Princesa Peach",
        status: 0,
        question:
            "CON LA P. Princesa a menudo secuestrada por Bowser en Mario Bros."
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
        letter: "s",
        answer: "super",
        status: 0,
        question: "CON LA S. Palabra que va antes que el nombre de Mario.",
    },
    {
        letter: "t",
        answer: "toad",
        status: 0,
        question:
            "CON LA T. Champiñon que acompaña a Mario en algunas aventuras.",
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letter: "w",
        answer: "wario",
        status: 0,
        question:
            "CONTIENE LA W. Archienemigo de mario con una W en su gorra",
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
        letter: "y",
        answer: "Yoshi",
        status: 0,
        question:
            "CONTIENE LA Y. Nombre del dinosaurio amigo de Mario que aparece en algunos juegos de la serie, especialmente en 'Super Mario World",
    },
    {
        letter: "z",
        answer: "zigzag",
        status: 0,
        question:
            "CON LA Z. Nombre de uno de los enemigos que aparece en varios juegos de Mario Bros y se asemeja a una bola con pinchos",
    },
];



// Selectores para los elementos del DOM
const startButton = document.querySelector('#startButton');
const sendButton = document.querySelector("#idSend");
const scoreDisplay = document.querySelector("#idScore");
const userAnswerInput = document.querySelector("#idUserAnswer");
const questionDisplay = document.querySelector("#idQuestion");
const passButton = document.querySelector("#idPasapalabra");
const letters = document.querySelectorAll(".letter"); // Selecciona todas las letras

// Variables de estado del juego
let currentQuestionIndex = 0;
let wordCounter = 27;
let countdownValue = 100;
let countdownInterval = null;
let correctAnswers = [];
let incorrectAnswers = [];
let respuestasPasadas = [];

// Función para mostrar preguntas
const showQuestions = (index) => {
    if (index >= 0 && index < questions.length) {
        const question = questions[index].question;
        questionDisplay.textContent = question;
    } else {
        // No hay más preguntas, fin del juego
        endGame();
    }
}

// Función para pasar a la siguiente pregunta
const nextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        showQuestions(currentQuestionIndex);
    } else {
        endGame();
    }
}

// Función para verificar la respuesta del usuario
const checkAnswer = () => {
    const userAnswer = userAnswerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === "") {
        questions[currentQuestionIndex].skipped = true; // Marcar como saltada
        nextQuestion(); // Pasar a la siguiente pregunta
        return;
    }

    if (userAnswer === correctAnswer) {
        letters[currentQuestionIndex].style.backgroundColor = "green";
        wordCounter--;
        scoreDisplay.textContent = wordCounter;
        correctAnswers.push(currentQuestionIndex);
    } else {
        letters[currentQuestionIndex].style.backgroundColor = "red";
        incorrectAnswers.push(currentQuestionIndex);
    }

    userAnswerInput.value = "";

    if (currentQuestionIndex === questions.length - 1) {
        if (questions.filter(q => !q.skipped).length > 0) {
            continueWithPassedQuestions(); // Continuar con preguntas saltadas
        } else {
            endGame();
        }
    } else {
        nextQuestion();
    }
}

// Función para el temporizador de cuenta regresiva
const countdown = () => {
    const countdownDisplay = document.querySelector("#idSeconds");
    if (countdownDisplay) {
        countdownInterval = setTimeout(() => {
            countdownValue--;
            countdownDisplay.textContent = countdownValue;
            if (countdownValue === 0) {
                endGame();
            } else {
                countdown();
            }
        }, 1000);
    }
}

// Función para el final del juego
const endGame = () => {
    clearInterval(countdownInterval);
    const endTime = document.querySelector(".control-container");
    if (endTime) {
        endTime.textContent = "Game Over!\n";
        endTime.textContent += `Correct answers: ${correctAnswers.length}/${questions.length}\n`;
        endTime.textContent += `Incorrect answers: ${incorrectAnswers.length}/${questions.length}`;
    }

    sendButton.removeEventListener("click", checkAnswer);
    userAnswerInput.disabled = true;
    startButton.disabled = true;
}

// Evento al hacer clic en "Pasapalabra"
passButton.addEventListener('click', () => {
    respuestasPasadas.push(currentQuestionIndex);
    nextQuestion();
});

// Evento al hacer clic en "Start"
startButton.addEventListener('click', () => {
    if (!countdownInterval) {
        countdown();
        showQuestions(currentQuestionIndex);
        sendButton.addEventListener("click", checkAnswer);
    }
});
