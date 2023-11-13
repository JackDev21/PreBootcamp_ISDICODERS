/*Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array 
// de dos elementos: el índice de la fila y el índice de la columna.

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]
Si no encuentra la palabra debe devolver [-1, -1]. Usa el siguiente código como punto de partida:*/

const matrix = [
    ["HTML", "CSS", "JavaScript"],
    ["Java", "C++", "Python"],
    ["Ruby", "Go", "Swift"],
];

function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "JavaScript") {
                return [i, j];
        
            } 
        }
    return [-1, -1];
    }
}

//const position = findJavaScript(matrix);
//console.log(position); // -> [0, 2]
