// Fibonacci


let n0 = 0;
let n1 = 1;
let i = 0;

while (i < 51) {
    console.log(n0);
    const n2 = n0 + n1;
    n0 = n1;
    n1 = n2;
    i++;
}