// Functions

class Word {
    constructor(id, letter, prefix, definition, correctAnswer) {
        this.id = id;
        this.letter = letter;
        this.prefix = prefix;
        this.definition = definition;
        this.correctAnswer = correctAnswer;
    }
}

const words = [
    new Word(0, "A", "Contiene la A:", "Personaje principal de Mario Bros.", "Mario"),
    new Word(1, "B", "Empieza por B:", "Enemigo recurrente en los juegos de Mario, con caparazón y púas.", "Buzzy Beetle"),
    new Word(2, "C", "Empieza por C:", "Princesa a menudo secuestrada por Bowser en Mario Bros.", "Princesa Peach"),
    new Word(3, "D", "Empieza por D:", "Enemigo que lanza hachas en los castillos de Mario.", "Bowser"),
    new Word(4, "E", "Empieza por E:", "Planta carnívora que aparece en tuberías.", "Planta Piraña"),
    new Word(5, "F", "Empieza por F:", "Moneda utilizada como moneda principal en el mundo de Mario Bros.", "Ficha Estrella"),
    new Word(6, "G", "Empieza por G:", "Enemigo que lanza bolas de fuego.", "Goomba"),
    new Word(7, "H", "Empieza por H:", "Hongo que hace crecer a Mario.", "Hongo de Crecimiento"),
    new Word(8, "I", "Empieza por I:", "Isla tropical donde se desarrolla la historia de Super Mario Sunshine.", "Isla Delfino"),
    new Word(9, "J", "Empieza por J:", "¿Nombre del enemigo con forma de nube que lanza rayos y aparece en varios juegos de Mario Bros?", "Jefe Trueno"),
    new Word(10, "K", "Empieza por K:", "Vehiculo utilizado en las carreras de Mario.", "Kart"),
    new Word(11, "L", "Empieza por L:", "Compañero y amigo de Mario durante las aventuras.", "Luigi"),
    new Word(12, "M", "Empieza por M:", "Moneda que concede una vida extra si se recopilan 100.", "Moneda 1-Up"),
    new Word(13, "N", "Empieza por N:", "Nube que transporta a Mario a otras ubicaciones.", "Nube Warp"),
    new Word(14, "Ñ", "Contiene la Ñ:", "Mario cuando repara una tubería", "Apaño."),
    new Word(15, "O", "Empieza por O:", "Enemigo que lanza huevos explosivos.", "Ovni Shy Guy"),
    new Word(16, "P", "Empieza por P:", "Princesa a menudo secuestrada por Bowser en Mario Bros.", "Princesa Peach"),
    new Word(17, "Q", "Contine la Q:", "Enemigo que dispara flechas.", "Arquero"),
    new Word(18, "R", "Empieza por R:", "Personaje que ayuda a Mario en algunas aventuras.", "Toad Rojo"),
    new Word(19, "S", "Empieza por S:", "Enemigo con forma de tortuga.", "Koopa Troopa"),
    new Word(20, "T", "Empieza por T:", "Personaje que lanza truenos.", "Trueno Chomp"),
    new Word(21, "U", "Contiene la U:", "Palabra que va antes que el nombre de Mario.", "Super"),
    new Word(22, "V", "Empieza por V:", "Villano principal en el mundo de Mario Bros.", "Bowser"),
    new Word(23, "W", "Empieza por W:", "Enemigo que lanza bolas de hielo.", "Wiggler"),
    new Word(24, "X", "Empieza por X:", "Simbolo que marca un tesoro", "X"),
    new Word(25, "Y", "Empieza por Y:", "¿Nombre del dinosaurio amigo de Mario que aparece en algunos juegos de la serie, especialmente en 'Super Mario World'?", "Yoshi"),
    new Word(26, "Z", "Empieza por Z:", "¿Nombre de uno de los enemigos que aparece en varios juegos de Mario Bros y se asemeja a una bola con pinchos?", "Zigzag")
];

let remainingWords = words.length;
console.log(remainingWords);




let timeRemaining = 150;
let intervalId;
const timer = document.querySelector("#idSeconds");
const displayTime = () => {
    timer.textContent = timeRemaining;
    timeRemaining--;
    if (timeRemaining < 0) {
        clearInterval(intervalId);
        timer.textContent = "0";
    }
}


const score = document.querySelector("#idScore");
let scoreRemaining = 27;
const displayScore = () => {


}








const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    clearInterval(intervalId);
    timeRemaining = 150;
    intervalId = setInterval(displayTime, 1000);
});

