let sumOfQuestions = [
    [
        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien." },
        { letter: "a", answer: "agrio", status: 0, question: "CON LA A. Que actuando sobre el gusto o el olfato produce sensación de acidez." },
        { letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta hortícola de tallo estriado, ramoso y alto, hojas algo espinosas y cabezuela comestible." },
    ],
    [
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso." },
        { letter: "b", answer: "borrar", status: 0, question: "CON LA B. Hacer que desaparezca la marca o contenido dejados en una superficie." },
        { letter: "b", answer: "burbuja", status: 0, question: "CON LA B. Porción de aire u otro gas envuelta en una fina película de líquido o formada en elinterior del mismo, que tiende a elevarse." },
    ],
    [
        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé." },
        { letter: "c", answer: "cocodrilo", status: 0, question: "CON LA C. Reptil de gran tamaño, de color marrón verdoso y piel cubierta de escamas duras." },
        { letter: "c", answer: "cuchara", status: 0, question: "CON LA C. Utensilio de cocina para coger una pequeña porción de alimento líquido o blando del contenido de un recipiente." },
    ],
    [
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida." },
        { letter: "d", answer: "decidir", status: 0, question: "CON LA D. Tomar una determinación definitiva sobre un asunto" },
        { letter: "d", answer: "duro", status: 0, question: "CON LA D. Que ofrece una gran resistencia a ser rayado, penetrado, deformado o cortado." },
    ],
    [
        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación." },
        { letter: "e", answer: "elevar", status: 0, question: "CON LA E. Poner algo en un lugar más alto del que está." },
        { letter: "e", answer: "encontrar", status: 0, question: "CON LA E. Localizar una cosa o persona que se busca, o reunirse con ella." },
    ],
    [
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad." },
        { letter: "f", answer: "furia", status: 0, question: "CON LA F. Enojo violento que se manifiesta con gritos y gestos agitados." },
        { letter: "f", answer: "fiesta", status: 0, question: "CON LA F. Reunión de personas en un lugar para divertirse o celebrar un acontecimiento y en la que se suele bailar." },
    ],
    [
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas." },
        { letter: "g", answer: "girar", status: 0, question: "CON LA G. Mover a una persona o una cosa haciéndole dar vueltas sobre sí misma o alrededor de otra cosa." },
        { letter: "g", answer: "golosina", status: 0, question: "CON LA G. Producto comestible, generalmente dulce y de pequeño tamaño, que se suele picar por su sabor agradable." },
    ],
    [
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento." },
        { letter: "h", answer: "huelga", status: 0, question: "CON LA H. Forma de protesta de los trabajadores consistente en el cese del trabajo hecho de común acuerdo." },
        { letter: "h", answer: "herir", status: 0, question: "CON LA H. Causar una herida en los tejidos del cuerpo. Producir a una persona daño moral." },
    ],
    [
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano." },
        { letter: "i", answer: "isla", status: 0, question: "CON LA I. Porción de tierra rodeada de agua por todas partes." },
        { letter: "i", answer: "itinerario", status: 0, question: "CON LA I. Ruta en la que se describen los lugares por los que se pasa." },
    ],
    [
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba." },
        { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que monta a caballo." },
        { letter: "j", answer: "juguete", status: 0, question: "CON LA J. Objeto que sirve para jugar a los niños y está destinado expresamente a este fin." },
    ],
    [
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria." },
        { letter: "k", answer: "karate", status: 0, question: "CON LA K. Sistema de combate sin armas de origen japonés, practicado principalmente como deporte, mediante golpes secos con brazos, codos y pies." },
        { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Aparato audiovisual con que se reproducen el fondo musical y, a la vez, las letras escritas de una canción, para que sean cantadas." },
    ],
    [
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo." },
        { letter: "l", answer: "levadura", status: 0, question: "CON LA L. Sustancia fermentada. Se emplea en repostería y en la elaboración de cerveza." },
        { letter: "l", answer: "libro", status: 0, question: "CON LA L. Conjunto de hojas de papel, manuescritas o impresas, unidas por uno de sus lados y normalmente encuadernadas, formando un solo volumen." },
    ],
    [
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas." },
        { letter: "m", answer: "medalla", status: 0, question: "CON LA M. Placa plana de metal, que lleva grabada en una cara o en las dos una imagen, inscripción, etc." },
        { letter: "m", answer: "mapa", status: 0, question: "CON LA M. Representación geográfica de la Tierra, o de parte de ella, sobre una superficie plana, de acuerdo con una escala." },
    ],
    [
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia." },
        { letter: "n", answer: "neceser", status: 0, question: "CON LA N. Bolsa o maletín que sirve para guardar o llevar objetos de aseo personal." },
        { letter: "n", answer: "nido", status: 0, question: "CON LA N. Refugio que construyen las aves con hierbas, ramas o plumas para poner sus huevos y albergar a sus crías." },
    ],
    [
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
        { letter: "ñ", answer: "cabaña", status: 0, question: "CONTIENE LA Ñ. Casa pequeña y tosca, generalmente en el campo, hecha de tronco, destinada a albergar o refugiar a alguien." },
        { letter: "ñ", answer: "muñeca", status: 0, question: "CONTIENE LA Ñ. Parte del brazo humano donde la mano se une con el antebrazo." },
    ],
    [
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien." },
        { letter: "o", answer: "optimista", status: 0, question: "CON LA O. Que tiende a ver y juzgar las cosas en su aspecto más positivo o más favorable." },
        { letter: "o", answer: "oscuridad", status: 0, question: "CON LA O. Falta o escasez de luz para percibir las cosas." },
    ],
    [
        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft." },
        { letter: "p", answer: "perfume", status: 0, question: "CON LA P. Sustancia aromática elaborada para dar un olor agradable." },
        { letter: "p", answer: "patriarcado", status: 0, question: "CON LA P. Predominio o mayor autoridad del varón en una sociedad o grupo social." },
    ],
    [
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche." },
        { letter: "q", answer: "quimera", status: 0, question: "CON LA Q. Sueño o ilusión que es producto de la imaginación y que se anhela o se persigue pese a ser muy improbable que se realice." },
        { letter: "q", answer: "quincena", status: 0, question: "CON LA Q. Conjunto formado por 15 unidades." },
    ],
    [
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor." },
        { letter: "r", answer: "renunciar", status: 0, question: "CON LA R. Abandonar voluntariamente una cosa que se posee o algo a lo que se tiene derecho." },
        { letter: "r", answer: "rinoceronte", status: 0, question: "CON LA R. Mamífero de hasta 5 metros de longitud, de color gris o castaño, patas cortas, cabeza alargada, cola corta y uno o dos grandes cuernos curvados en la línea media de la nariz." },
    ],
    [
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático." },
        { letter: "s", answer: "sorpresa", status: 0, question: "CON LA S. Alteración emocional causada por algo imprevisto o inesperado." },
        { letter: "s", answer: "semana", status: 0, question: "CON LA S. Período de siete días que, según el calendario civil, empieza el lunes y termina el domingo." },
    ],
    [
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984." },
        { letter: "t", answer: "tortuga", status: 0, question: "CON LA T. Reptil cuyo cuerpo está protegido por un duro caparazón, dentro del cual pueden retraer la cabeza, extremidades y cola. Se caracteriza por caminar muy lentamente." },
        { letter: "t", answer: "tartamudo", status: 0, question: "CON LA T. Que sufre un trastorno del habla que se caracteriza por las repeticiones e irrupciones involuntarias en la emisión de palabras." },
    ],
    [
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914." },
        { letter: "u", answer: "ulises", status: 0, question: "CON LA U. Héroe y rey legendario de la mitología griega, protagonista de 'La Odisea', que luchó en la guerra de Troya y tardó 20 años en regresar a su tierra Ítaca, por culpa de varios impedimentos." },
        { letter: "u", answer: "usufructo", status: 0, question: "CON LA U. Derecho por el que una persona puede usar los bienes de otra y disfrutar de sus beneficios, con la obligación de conservarlos como si fueran propios." },
    ],
    [
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa." },
        { letter: "v", answer: "vestidor", status: 0, question: "CON LA V. Habitación de una vivienda para vestirse o cambiarse de ropa." },
        { letter: "v", answer: "volante", status: 0, question: "CON LA V. Rueda grande de una máquina que sirve para regularizar el movimiento de un mecanismo y para transmitir dicho movimiento a toda la máquina." },
    ],
    [
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso." },
        { letter: "w", answer: "darwin", status: 0, question: "CONTIENE LA W. Científico inglés, reconocido por ser el científico más influyente de los que plantearon la idea de la evolución biológica a través de la selección natural." },
        { letter: "w", answer: "kiwi", status: 0, question: "CONTIENE LA W. Fruto de este mismo arbusto, combustible, de forma ovalada, piel delgada y vellosa, color verde y con diminutas semillas negras." },
    ],
    [
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética." },
        { letter: "x", answer: "exuberante", status: 0, question: "CONTIENE LA X. Que está muy desarrollado o que tiene gran cantidad de alguna cosa." },
        { letter: "x", answer: "excavar", status: 0, question: "CONTIENE LA X. Hacer un hoyo, galería o cavidad en el suelo o en determinados cuerpos." },
    ],
    [
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos." },
        { letter: "y", answer: "yate", status: 0, question: "CONTIENE LA Y. Embarcación de recreo a motor o vela, de manga o anchura mayor que un velero, con camarotes y generalmente lujosa." },
        { letter: "y", answer: "yogur", status: 0, question: "CONTIENE LA Y. Alimento líquido y espeso o pastoso, de varios sabores, que se obtiene por fermentación de la leche de vaca entera o desnatada." },
    ],
    [
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional." },
        { letter: "z", answer: "zapatilla", status: 0, question: "CON LA Z. Calzado ligero y cómodo, de tela y cuero fino, que se usa dentro de casa." },
        { letter: "z", answer: "zombi", status: 0, question: "CON LA Z. Muerto que ha sido revivido mediante un rito mágico y que carece de voluntad propia." },
    ]
];

let userName;
let player = {};
let ranking = [
    {
        name: 'maria',
        correctAnswers: 1
    },
    {
        name: 'pablo',
        correctAnswers: 6
    },
];

let questions = [];
let randomQuestion;

let index = 0;
let round = 1;

let play = false;
let counter = 130;
const timerJS = document.querySelector('.timer');

let correctAnswers = 0;
let wrongAnswers = 0;
const correctCircle = document.querySelector('.answers-correct');
const wrongCircle = document.querySelector('.answers-incorrect');

const infoJS = document.querySelector('.info');
const questionJS = document.querySelector('.question-html');
const input = document.querySelector('.answer-html');
const letters = document.querySelectorAll('.letter');

const buttonForPlay = document.querySelector('.play');
const buttonForCheck = document.querySelector('.buttons-check');
const buttonForPas = document.querySelector('.buttons-pas');
const buttonForEnd = document.querySelector('.buttons-end');

const intro = ('Bienvenid@ al juego de PASAPALABRA.' + '<br>' +
    'Recibirás 1 punto por cada respuesta correcta. No introduzcas ninguna tilde/acento.' + '<br>' +
    'Si dudas de la respuesta, haz click sobre el botón "Pasapalabra" para contestarla en la siguiente ronda.' + '<br>' +
    ' En caso de querer abandonar el juego en cualquier momento, pulsa el botón "Fin". ' + '<br>' +
    ' Pulsa "Jugar" y ¡mucha suerte!');

infoJS.innerHTML = intro;

const getQuestions = () => {
    for (let i = 0; i < sumOfQuestions.length; i++) {
        randomQuestion = sumOfQuestions[i][Math.round(Math.random() * (0 - 2) + 2)];
        questions.push(randomQuestion);
    }
    return questions;
}


let start = setInterval(() => {
    if (counter === 0) {
        clearInterval(start);
        questionJS.innerHTML = '¡Se acabó el tiempo!';
        document.querySelector('.timer').style.visibility = 'hidden';
        document.querySelector('.answer-html').style.visibility = 'hidden';
        document.querySelector('.buttons-check').style.visibility = 'hidden';
        document.querySelector('.buttons-pas').style.visibility = 'hidden';
        document.querySelector('.buttons-end').style.visibility = 'hidden';
    } else if (play === true) {
        counter--;
        timerJS.innerHTML = counter;
    }
}, 1000);


const askForName = () => {
    userName = prompt('!!Buenas!! Por favor, introduce tu nombre.');
    if (!userName || userName === undefined || userName === " ") {
        alert('Lo sentimos, pero hay algún error en el mensaje introducido. Te agradeceríamos volvieras a introducir el nombre correctamente.');
        askForName();
    } else {
        alert('Bienvenid@ ' + userName + ' al juego de PASAPALABRA. ' + '\n' +
            'Lee las instrucciones que aparecen en pantalla.');
    }
}


const nextQuestion = () => {
    index = index + 1;
    input.value = "";
    questionJS.innerHTML = questions[index].question;
}


const startGame = () => {
    questions = [];
    getQuestions();
    play = true;
    askForName();
    counter = 130;
    start = (setInterval, 1000);
    document.querySelector('.timer').style.visibility = 'visible';
    document.querySelector('.question-html').style.visibility = 'visible';
    document.querySelector('.answer-html').style.visibility = 'visible';
    document.querySelector('.buttons-check').style.visibility = 'visible';
    document.querySelector('.buttons-pas').style.visibility = 'visible';
    document.querySelector('.buttons-end').style.visibility = 'visible';
    infoJS.innerHTML = intro;
    index = 0;
    round = 1;
    correctAnswers = 0;
    correctCircle.innerHTML = '';
    wrongAnswers = 0;
    wrongCircle.innerHTML = '';
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.backgroundImage = "radial-gradient(circle, rgb(34, 86, 243), rgba(7, 7, 207, 0.743))";
    }
    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
    }
    questionJS.innerHTML = questions[index].question;
    input.value = "";
}


const getRanking = () => {
    if (correctAnswers + wrongAnswers === 27) {
        player = { name: userName, correctAnswers: correctAnswers };
        ranking.push(player);
        ranking.sort((a, b) => {
            if (a.correctAnswers === b.correctAnswers) {
                return 0;
            }
            if (a.correctAnswers > b.correctAnswers) {
                return -1;
            }
            if (a.correctAnswers < b.correctAnswers) {
                return 1;
            }
        });
        infoJS.innerHTML = ('El ranking, ordenado por mayores respuestas correctas, es el siguiente: <br>');
        for (let i = 0; i < ranking.length; i++) {
            infoJS.innerHTML += ('<br> Jugador: ' + ranking[i].name + ' - Puntuación: ' + ranking[i].correctAnswers + ' respuestas correctas <br>');
        }
    }
}


const closeRosco = () => {
    input.value = '';
    document.querySelector('.timer').style.visibility = 'hidden';
    document.querySelector('.question-html').style.visibility = 'hidden';
    document.querySelector('.answer-html').style.visibility = 'hidden';
    document.querySelector('.buttons-check').style.visibility = 'hidden';
    document.querySelector('.buttons-pas').style.visibility = 'hidden';
    document.querySelector('.buttons-end').style.visibility = 'hidden';
    getRanking();
}


const nextRound = () => {
    round++;
    while ((questions[index].status === 1) && (correctAnswers + wrongAnswers < 27)) {
        index++;
    }
    questionJS.innerHTML = questions[index].question;
    input.value = "";
}


const checkStatus = () => {
    if (correctAnswers + wrongAnswers === 27) {
        closeRosco();
    }
    if ((round >= 1) && (index === 26)) {
        index = 0;
        nextRound();
    } else if ((round === 1) && (index < 26)) {
        nextQuestion();
    } else if ((round > 1) && (index < 26)) {
        do {
            index++;
            if (index > 26) {
                index = 0;
                nextRound();
            }
        } while ((questions[index].status !== 2) && (correctAnswers + wrongAnswers < 27));
        questionJS.innerHTML = questions[index].question;
        input.value = "";
    }
}


const checkButton = () => {
    let answerUser = input.value.toLowerCase();
    if (answerUser === questions[index].answer) {
        correctAnswers++;
        correctCircle.innerHTML = correctAnswers;
        letters[index].style.backgroundImage = "radial-gradient(circle, rgb(158, 227, 121), rgb(76, 175, 80))";
        infoJS.innerHTML = ('¡Genial! Respuesta correcta.');
        questions[index].status = 1;
    } else if ((answerUser !== questions[index].answer)) {
        wrongAnswers++;
        wrongCircle.innerHTML = wrongAnswers;
        letters[index].style.backgroundImage = "radial-gradient(circle, rgb(250, 125, 125), rgb(242, 46, 46))";
        infoJS.innerHTML = ('¡Oh no! Respuesta incorrecta. ' + '<br>' + 'La palabra correcta era: ' + questions[index].answer);
        questions[index].status = 1;
    }
    checkStatus();
}


const pasButton = () => {
    letters[index].style.backgroundImage = "radial-gradient(circle, rgb(250, 238, 132), rgb(237, 215, 14))";
    infoJS.innerHTML = ('¡Hecho! Dejamos la letra para la siguiente ronda.');
    questions[index].status = 2;
    checkStatus();
}


const endGame = () => {
    document.querySelector('.timer').style.visibility = 'hidden';
    document.querySelector('.answer-html').style.visibility = 'hidden';
    document.querySelector('.buttons-check').style.visibility = 'hidden';
    document.querySelector('.buttons-pas').style.visibility = 'hidden';
    document.querySelector('.buttons-end').style.visibility = 'hidden';
    infoJS.innerHTML = ('Sentimos que abandones el juego. Tu puntuación no aparecerá en el ranking. ¡Esperamos verte de nuevo! ' + '<br>' +
        'Tu resultado ha quedado así: ' + '<br>' + correctAnswers + ' aciertos y ' + wrongAnswers + ' fallos. ');
}


buttonForPlay.addEventListener('click', startGame);
buttonForCheck.addEventListener('click', checkButton);
buttonForPas.addEventListener('click', pasButton);
buttonForEnd.addEventListener('click', endGame);