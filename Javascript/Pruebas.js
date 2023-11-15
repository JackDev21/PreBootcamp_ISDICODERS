const fibonacciSeries = (fibonacciSequenceLength) => {
    let result = [
      { position: 0, value: 0 },
      { position: 1, value: 1 },
    ];
    for (
      let fibonacciPosition = 2;
      fibonacciPosition < fibonacciSequenceLength;
      fibonacciPosition++
    ) {
      result[fibonacciPosition] = {
        position: fibonacciPosition,
        value:
          result[fibonacciPosition - 1].value +
          result[fibonacciPosition - 2].value,
      };
    }
    return result;
  };
  
  console.log(fibonacciSeries(10));