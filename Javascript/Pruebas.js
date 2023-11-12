function sortAbsoluteNumbers(numbers) {
    numbers.sort(function(a, b) {
    return Math.abs(a) - Math.abs(b);
    });
}
sortAbsoluteNumbers(numbers);
console.log(numbers);