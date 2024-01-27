

const sumOfQuestions = [
    [
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?1",
        },
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?2",
        },
        {
            letter: "a",
            answer: "Apu",
            question: "Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?3",
        }
    ],
    [
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?1",
        },
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?2",
        },
        {
            letter: "b",
            answer: "Bart",
            question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?1",
        },
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?2",
        },
        {
            letter: "c",
            answer: "Central Nuclear",
            question: "Con la C: ¿Donde trabaja Homer Simpson?3",
        }
    ],
    [
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?1",

        },
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?2",

        },
        {
            letter: "d",
            answer: "Duff",
            question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?3",
        }
    ],
    [
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?1",
        },
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?2",
        },
        {
            letter: "e",
            answer: "Edna",
            question: "Con la E: ¿Quién es la maestra de Bart Simpson?3",
        }

    ],
    [

        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?1",
        },
        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?2",
        },
        {
            letter: "f",
            answer: "Flanders",
            question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?3",
        }

    ],
    [

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?1",

        },

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?2",

        },

        {
            letter: "g",
            answer: "Grafiti",
            question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?3",
        }
    ],
    [
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?1",
        },
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?2",
        },
        {
            letter: "h",
            answer: "Homer",
            question: "Con la H: ¿Quién es el padre de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?1",
        },
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?2",
        },
        {
            letter: "i",
            answer: "Itchy",
            question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?3",
        }
    ],
    [

        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?1",
        },
        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?2",
        },
        {
            letter: "j",
            answer: "Jebediah Springfield",
            question: "Con la J: ¿Quién es el fundador de Springfield?3",
        }
    ],
    [
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?1",
        },
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?2",
        },
        {
            letter: "k",
            answer: "Krusty",
            question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?3",
        }
    ],
    [

        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?1",
        },
        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?2",
        },
        {
            letter: "l",
            answer: "Lisa Simpson",
            question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?3",
        }
    ],
    [

        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?1",
        },
        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?2",
        },
        {
            letter: "m",
            answer: "Maggie",
            question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?3",
        }
    ],
    [
        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?1",
        },

        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?2",
        },
        {
            letter: "n",
            answer: "Ned Flanders",
            question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?3",
        }
    ],
    [
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?1",

        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?2",
        },
        {
            letter: "ñ",
            answer: "Ñu",
            question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?3",
        }
    ],
    [
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?1",
        },
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?2",
        },
        {
            letter: "o",
            answer: "Otto",
            question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?3",
        }
    ],
    [
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?1",
        },
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?2",
        },
        {
            letter: "p",
            answer: "Patty",
            question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?3",
        }
    ],
    [
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?1",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?2",
        },
        {
            letter: "q",
            answer: "Quimby",
            question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?3",
        }
    ],
    [
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?1",
        },
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?2",
        },
        {
            letter: "r",
            answer: "Ralph",
            question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?3",
        }
    ],
    [
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?1",
        },
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?2",
        },
        {
            letter: "s",
            answer: "Selma",
            question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?3",
        }
    ],
    [
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?1",
        },
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?2",
        },
        {
            letter: "t",
            answer: "Troy McClure",
            question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?3",
        }
    ],
    [
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?1",

        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?2",
        },
        {
            letter: "u",
            answer: "Universidad",
            question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?3",
        }
    ],
    [
        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?1",
        },

        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?2",
        },
        {
            letter: "v",
            answer: "Violín",
            question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?3",
        }
    ],
    [
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?1",
        },
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?2",
        },
        {
            letter: "w",
            answer: "Waylon Smithers",
            question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?3",
        }
    ],
    [

        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?1",
        },
        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?2",
        },
        {
            letter: "x",
            answer: "Expediente X",
            question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?3",
        }
    ],
    [
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?1",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?2",
        },
        {
            letter: "y",
            answer: "Yeti",
            question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?3",
        }
    ],
    [
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?1",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?2",
        },
        {
            letter: "z",
            answer: "Zia",
            question: "Con la Z: ¿Cuál es el nombre de la hija de Lisa en el futuro?3",
        }
    ]


];




let randomQuestion;
let questions = [];

let index = 0;
let round = 1;
let crono;

let scoreValue = 27;
let correctAnswers = 0;
let incorrectAnswers = 0;

const getQuestions = () => {
    // Recorre el array sumOfQuestions que contiene preguntas agrupadas por letra
    for (let i = 0; i < sumOfQuestions.length; i++) {
        // Genera un índice aleatorio dentro del rango de preguntas para la letra actual
        const randomIndex = Math.floor(Math.random() * sumOfQuestions[i].length);

        // Selecciona una pregunta aleatoria para la letra actual
        randomQuestion = sumOfQuestions[i][randomIndex];

        // Agrega la pregunta seleccionada al array questions
        questions.push(randomQuestion);
    }
    // Devuelve el array de preguntas generado
    return questions;
};


const timeDisplay = () => {
    const timer = document.querySelector('.timer');
    let timeValue = 120;

    crono = setInterval(() => { // setInterval es una función que crea un temporizador
        timer.innerHTML = timeValue; // Se muestra el tiempo en el elemento con la clase .timer
        timeValue--; // Se decrementa el tiempo en 1 segundo

        if (timeValue < 0) {
            endGame(); // Si el tiempo se acaba, se llama a la función endGame()
        }
    }, 1000); // Se ejecuta cada segundo
};


const nextQuestion = () => {
    index = index + 1; // Incrementa el índice de pregunta
    questionJS.innerHTML = questions[index].question; // Muestra la pregunta actual
};


const nextRound = () => {
    round++;
    while ((questions[index].status === 1) && (correctAnswers + incorrectAnswers < sumOfQuestions.length)) { // Mientras la pregunta no haya sido respondida y no haya terminado el juego 
        index++; // Incrementa el índice de pregunta
    }
    questionJS.innerHTML = questions[index].question; // Muestra la pregunta actual
    userAnswer.textContent = ""; // 
};



const questionJS = document.querySelector('.question');
// Función que verifica el estado del juego y toma decisiones en consecuencia
const checkStatus = () => {
    // Si se han respondido todas las preguntas, finaliza el juego
    if (correctAnswers + incorrectAnswers === sumOfQuestions.length) {
        endGame();
    }

    // Si estamos en la primera ronda y hemos llegado al final de todas las preguntas
    if ((round >= 1) && (index === 26)) { // 26 es el número total de preguntas porque el índice comienza en 0
        index = 0; // Reinicia el índice a cero
        nextRound(); // Avanza a la siguiente ronda
    }
    // Si estamos en la primera ronda y el índice es menor que 26
    else if ((round === 1) && (index < 26)) {
        nextQuestion(); // Muestra la siguiente pregunta
    }
    // Si estamos en una ronda posterior a la primera y el índice es menor que 26
    else if ((round > 1) && (index < 26)) {
        //Avanza al siguiente índice hasta encontrar una pregunta con estado diferente de 2 o recorrer todas las preguntas
        do {
            index++; // Incrementa el índice
            // Si llegamos al final de las preguntas, reinicia el índice y avanza a la siguiente ronda
            if (index === 26) {
                index = 0;
                nextRound();
            }
        } while ((questions[index].status !== 2) && (correctAnswers + incorrectAnswers < sumOfQuestions.length)); // mientras el status de la pregunta sea diferente de 2 o no hayamos terminado el juego
        // Muestra la pregunta correspondiente y reinicia el valor del campo de respuesta del usuario
        questionJS.innerHTML = questions[index].question;
        userAnswer.value = "";
    }
}


const showResult = () => {
    startButton.style.visibility = 'hidden'; // Oculta el botón de inicio
    result.textContent = `Respuestas correctas: ${correctAnswers} Respuestas incorrectas: ${incorrectAnswers}`; // Actualiza el texto del elemento de resultado
}


const passButton = () => {
    questions[index].status = 2;
    checkStatus(); // Verifica si se ha terminado el juego y muestra el resultado si es así.

};


const checkAnswer = () => {
    let answerUser = userAnswer.value.toLowerCase().trim();

    if (answerUser === questions[index].answer.toLowerCase().trim()) {
        letter[index].classList.add("correct-answer");
        correctAnswers++;
        questions[index].status = 1;
        scoreValue--;
    } else {
        letter[index].classList.add("incorrect-answer");
        incorrectAnswers++;
        questions[index].status = 1;
    }
    score.textContent = scoreValue;
    userAnswer.value = "";
    checkStatus();
};



const startGame = () => {
    // Verifica si el juego ya está en progreso antes de iniciarlo nuevamente
    if (index === -1 || (correctAnswers + incorrectAnswers) === 0) {
        // Restablecer el array de preguntas
        questions = getQuestions();

        // Restablecer el índice, la ronda y las respuestas
        index = -1; // El índice se inicia en -1 porque el juego comienza en la pregunta 0
        round = 1;
        correctAnswers = 0;
        incorrectAnswers = 0;


        nextQuestion(); // Muestra la primera pregunta


        startButton.disabled = true;


        // Configurar el temporizador solo si no está activo
        if (!crono) {
            // Restablecer el tiempo y mostrarlo
            timeDisplay();
        }

        // Restablecer el estado de las preguntas
        questions.forEach(question => {
            question.status = 0;
        });


    }

};



const restartGame = () => {
    startButton.style.visibility = 'visible';
    panelGame.style.visibility = 'visible';
    endGameDisplay.style.display = 'none';
    result.style.visibility = 'hidden';


    index = -1;
    round = 1;
    correctAnswers = 0;
    incorrectAnswers = 0;


    letter.forEach(letterelement => {
        letterelement.classList.remove("correct-answer");
        letterelement.classList.remove("incorrect-answer");
    })

    if (crono) {
        // Restablecer el tiempo y mostrarlo
        timeDisplay();
    }
    nextQuestion();


}


const closeGame = () => {
    endGame();
    result.style.visibility = 'visible';

};


const endGame = () => {
    clearInterval(crono);
    endGameDisplay.style.display = 'flex';
    panelGame.style.visibility = 'hidden';
    startButton.disabled = true;
    showResult();
};

const send = document.querySelector('#btnsend');
const startButton = document.querySelector('#btn-start');
const playAgain = document.querySelector('#play-again');
const endGameDisplay = document.querySelector('.end-game');
const panelGame = document.querySelector('.panel-game');
const closeButton = document.querySelector('#btnclose');
const buttonPasapalabra = document.querySelector('#btnpasapalabra');
const score = document.querySelector('.score');
const userAnswer = document.querySelector('#txtAnswer');
const letter = document.querySelectorAll('.letter');
const result = document.querySelector('.result-container .result');
const restartButton = document.querySelector('#play-again');

send.addEventListener('click', checkAnswer);
startButton.addEventListener('click', startGame);
closeButton.addEventListener('click', closeGame);
playAgain.addEventListener('click', restartGame);
buttonPasapalabra.addEventListener('click', passButton);
restartButton.addEventListener('click', restartGame);