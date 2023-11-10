// Haz una función que solo devuelva un número random entre 1900 y 2050, ese número random.


const numeroRandom = () => {
 // Definir el número máximo y mínimo
    const maxNum = 2051
    const minNum = 1900

/* desglose paso a paso de cómo funciona:

1º Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo). Por ejemplo, podría generar 0.486.

2º (maxNum - minNum) calcula la diferencia entre maxNum y minNum. En este caso, sería 2051 - 1900 = 151.

3º Math.random() * (maxNum - minNum) multiplica el número aleatorio generado en el paso 1 por la diferencia calculada en el paso 2. Por ejemplo, si el número aleatorio es 0.486, entonces el resultado sería 0.486 * 151 = 73.686.

4º Math.floor() redondea el resultado del paso 3 hacia abajo al número entero más cercano. En este ejemplo, el resultado sería 73.

5º + minNum suma el número mínimo (minNum) al resultado del paso 4. En este caso, el resultado final sería 73 + 1900 = 1973. */
    const numeroAzar = Math.floor(Math.random() * (maxNum - minNum)) + minNum

  // Imprimir el número aleatorio en la consola
    console.log(numeroAzar)
}

// Llamar a la función numeroRandom para generar y mostrar un número aleatorio
numeroRandom()