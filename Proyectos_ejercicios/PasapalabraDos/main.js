const questions = [
    {
        letter: "a",
        answer: "Apu",
        status: 0,
        question: " Con la A: ¿Quién es el dueño de la tienda Kwik-E-Mart?",
    },
    {
        letter: "b",
        answer: "Bart",
        status: 0,
        question: "Con la B: ¿Cuál es el hijo mayor de la familia Simpson?",
    },
    {
        letter: "c",
        answer: "Central Nuclear",
        status: 0,
        question: "Con la C: ¿Donde trabaja Homer Simpson?",
    },
    {
        letter: "d",
        answer: "Duff",
        status: 0,
        question: "Con la D: ¿Cómo se llama la cerveza favorita en Springfield?",
    },
    {
        letter: "e",
        answer: "Edna",
        status: 0,
        question: "Con la E: ¿Quién es la maestra de Bart Simpson?",
    },
    {
        letter: "f",
        answer: "Flanders",
        status: 0,
        question: "Con la F: ¿Cómo se apellida el vecino de los Simpson?",
    },
    {
        letter: "g",
        answer: "Grafiti",
        status: 0,
        question: "Con la G: ¿En qué actividad creativa y a menudo problemática es conocido Bart Simpson?",
    },
    {
        letter: "h",
        answer: "Homer",
        status: 0,
        question: "Con la H: ¿Quién es el padre de la familia Simpson?",
    },
    {
        letter: "i",
        answer: "Itchy",
        status: 0,
        question: "Con la I: ¿Cómo se llama el ratón en el show de Krusty el payaso?",
    },
    {
        letter: "j",
        answer: "Jebediah Springfield",
        status: 0,
        question: "Con la J: ¿Quién es el fundador de Springfield?",
    },
    {
        letter: "k",
        answer: "Krusty",
        status: 0,
        question: "Con la K: ¿Cuál es el nombre del payaso en la televisión de Springfield?",
    },
    {
        letter: "l",
        answer: "Lisa Simpson",
        status: 0,
        question: "Con la L: ¿Cuál es el nombre de la hija mediana de la familia Simpson?",
    },
    {
        letter: "m",
        answer: "Maggie",
        status: 0,
        question: "Con la M: ¿Cómo se llama la hija más pequeña de la familia Simpson?",
    },
    {
        letter: "n",
        answer: "Ned Flanders",
        status: 0,
        question: "Con la N: ¿Cuál es el nombre del vecino religioso de los Simpson?",
    },
    {
        letter: "ñ",
        answer: "Ñu",
        status: 0,
        question: "Con la Ñ: ¿Cuál es el nombre del animal que Homer compra en un episodio para tener como mascota?",
    },

    {
        letter: "o",
        answer: "Otto",
        status: 0,
        question: "Con la O: ¿Cuál es el nombre del conductor del autobús escolar?",
    },
    {
        letter: "p",
        answer: "Patty",
        status: 0,
        question: "Con la P: ¿Cómo se llama la hermana gemela de Marge?",
    },
    {
        letter: "q",
        answer: "Quimby",
        status: 0,
        question: "Con la Q: ¿Cuál es el apellido del alcalde de Springfield?",
    },
    {
        letter: "r",
        answer: "Ralph",
        status: 0,
        question: "Con la R: ¿Cómo se llama el hijo torpe del Jefe Gorgory Wiggum?",
    },
    {
        letter: "s",
        answer: "Selma",
        status: 0,
        question: "Con la S: ¿Cómo se llama la hermana gemela de Marge?",
    },
    {
        letter: "t",
        answer: "Troy McClure",
        status: 0,
        question: "Con la T: ¿Cómo se llama el actor secundario en los Simpson?",
    },
    {
        letter: "u",
        answer: "Universidad",
        status: 0,
        question: "Con la U: ¿A qué lugar asiste Lisa cuando es admitida en la academia para niños superdotados?",
    },
    {
        letter: "v",
        answer: "Violín",
        status: 0,
        question: "Con la V: ¿Qué instrumento musical toca Lisa en varios episodios de Los Simpson?",
    },

    {
        letter: "w",
        answer: "Waylon Smithers",
        status: 0,
        question: "Con la W: ¿Cuál es el nombre del asistente personal de Mr. Burns?",
    },
    {
        letter: "x",
        answer: "Expediente X",
        status: 0,
        question: "Con la X: ¿Qué serie de televisión parodiaron en un episodio de Halloween?",
    },
    {
        letter: "y",
        answer: "Yeti",
        status: 0,
        question: "Con la Y: ¿Qué ser mitológico de pies grandes intenta encontrar Bart en el bosque?",
    },
    {
        letter: "z",
        answer: "Zia",
        status: 0,
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
    const result = document.querySelector('#btn-start');
    result.textContent = `Respuestas correctas ${correctAnswer} \nRespuestas incorrectas ${incorrectAnswer}`
}

let scoreValue = 27; // Define el valor inicial del puntaje fuera de la función

let correctAnswer = 0;
let incorrectAnswer = 0;
const checkAnswer = () => {
    const userAnswer = document.querySelector("#txtAnswer").value; // Obtén el valor del input
    const score = document.querySelector('.score'); // Selecciona el elemento de puntaje
    const letter = document.querySelectorAll('.letter');
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) { // Comprueba si la respuesta es correcta
        letter[currentQuestionIndex].style.backgroundColor = "green";
        scoreValue--; // Resta uno del puntaje si la respuesta es correcta
        correctAnswer++;
        score.textContent = scoreValue; // Actualiza el contenido del elemento de puntaje
        currentQuestionIndex++;
        showQuestion();


        // Aquí puedes agregar lógica adicional si deseas pasar a la siguiente pregunta, etc.

    } else {
        letter[currentQuestionIndex].style.backgroundColor = "red";
        incorrectAnswer++
        currentQuestionIndex++;
        showQuestion();
    }

    // Limpia el campo de respuesta después de comprobar
    document.querySelector("#txtAnswer").value = '';
}

// Asegúrate de llamar a checkAnswer en algún lugar, por ejemplo, al hacer click en un botón de enviar
document.querySelector('#btnsend').addEventListener('click', checkAnswer);




const timeDisplay = () => {
    const timer = document.querySelector('.timer');
    let timeValue = 60;

    // Actualiza el tiempo cada segundo (1000 milisegundos)
    const crono = setInterval(() => { // setInterval() devuelve un identificador del intervalo
        timer.innerHTML = timeValue;
        timeValue--;

        // Cuando el tiempo llegue a 0, limpia el intervalo para detener el contador
        if (timeValue < 0) {
            showResult(); // Llama a la función showResult() para mostrar el resultado final
            clearInterval(crono); // clearInterval() elimina el intervalo con el identificador dado
        }
    }, 1000);

};


const endGame = () => {
    const close = document.querySelector('#btnclose');
    close.addEventListener('click', () => {
        showResult();

    });
}
endGame();

const startGame = () => {
    const start = document.querySelector('#btn-start');

    start.addEventListener('click', () => {
        start.disabled = true; // Deshabilita el botón de inicio una vez que se inicia el juego
        timeDisplay();
        showQuestion();

    })


}
startGame();