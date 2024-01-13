let numberOne;
let numberTwo;
let calculation;


const display = document.querySelector('#display'); // Obtiene el elemento 'display' por su ID
const reset = document.querySelector('#clear');
const invert = document.querySelector('#invert');
const percent = document.querySelector('#percent');
const div = document.querySelector('#div')
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const mult = document.querySelector('#mult');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const diff = document.querySelector('#diff');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const sum = document.querySelector('#sum');
const zero = document.querySelector('#zero');
const comma = document.querySelector('#comma');
const equal = document.querySelector('#equal');

// Obtén todos los botones numéricos
const numberButtons = document.querySelectorAll('.num'); // Obtiene todos los botones numéricos

const calculator = () => {



    const clearDisplay = () => { // limpia el display
        display.textContent = '';
    }

    const restart = () => { // Reinicia la calculadora
        display.textContent = '0';
        numberOne = '';
        numberTwo = '';
        calculation = '';
    }






    // Agrega un solo evento a todos los botones numéricos
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Limita la longitud del display a 12 caracteres
            if (display.textContent.length < 12) {
                // Si el display tiene solo '0', reemplázalo con el número del botón, de lo contrario, agrégalo
                display.textContent = display.textContent === '0' ? button.textContent : display.textContent + button.textContent;
            }
        });
    });


    /*
    one.addEventListener('click', (e) =>
        display.textContent = display.textContent + '1'
    )
    two.addEventListener('click', (e) =>
        display.textContent = display.textContent + '2'
    )
    three.addEventListener('click', (e) =>
        display.textContent = display.textContent + '3'
    )
    four.addEventListener('click', (e) =>
        display.textContent = display.textContent + '4'
    )
    five.addEventListener('click', (e) =>
        display.textContent = display.textContent + '5'
    )
    six.addEventListener('click', (e) =>
        display.textContent = display.textContent + '6'
    )
    seven.addEventListener('click', (e) =>
        display.textContent = display.textContent + '7'
    )
    eight.addEventListener('click', (e) =>
        display.textContent = display.textContent + '8'
    )
    nine.addEventListener('click', (e) =>
        display.textContent = display.textContent + '9'
    )
    zero.addEventListener('click', (e) =>
        display.textContent = display.textContent + '0'
    )
    */

    comma.addEventListener('click', (e) => // Con addEventListener agregamos un evento de clic al botón coma
        display.textContent = display.textContent + '.'
    )
    reset.addEventListener('click', restart) // Con addEventListener agregamos un evento de clic al botón reset

    sum.addEventListener('click', (e) => { // Con addEventListener agregamos un evento de clic al botón sum
        numberOne = display.textContent;
        calculation = '+';
        clearDisplay(); // Limpia el display
    })

    diff.addEventListener('click', (e) => {
        numberOne = display.textContent;
        calculation = '-';
        clearDisplay();
    })

    mult.addEventListener('click', (e) => {
        numberOne = display.textContent;
        calculation = '*';
        clearDisplay();
    })

    div.addEventListener('click', (e) => {
        numberOne = display.textContent;
        calculation = '/';
        clearDisplay();
    })

    percent.addEventListener('click', (e) => {
        numberOne = display.textContent;
        calculation = '%';
        clearDisplay();
    })

    invert.addEventListener('click', (e) => {
        numberOne = display.textContent;
        calculation = '+/-';
        clearDisplay();
    })

    equal.addEventListener('click', (e) => {
        numberTwo = display.textContent;
        result()
    })


    const result = () => {
        let res = 0
        if (calculation === '+') { // Calcula el resultado de la operación, con parseFloat convierte el string a float(decimal)
            res = parseFloat(numberOne) + parseFloat(numberTwo)
        } else if (calculation === '-') {
            res = parseFloat(numberOne) - parseFloat(numberTwo)
        } else if (calculation === '*') {
            res = parseFloat(numberOne) * parseFloat(numberTwo)
        } else if (calculation === '/') {
            if (parseFloat(numberTwo) === 0) {
                res = alert('Un numero no puede ser dividir entre 0') // Si el segundo número es 0 en la division, muestra un alert
                display.textContent = res

            } else {
                res = parseFloat(numberOne) / parseFloat(numberTwo)
            }
        } else if (calculation === '%') {
            res = parseFloat(numberOne) / 100
        } else if (calculation === '+/-') {
            res = parseFloat(numberOne) * -1
        }

        if (Number.isInteger(res)) {
            res = res.toString()

        } else {
            res = parseFloat(res.toPrecision(12)) // toPrecision(12) redondea a 12 cifras y toFixed(12) redondea a 12 decimales
        }

        display.textContent = res
    }



}




calculator()