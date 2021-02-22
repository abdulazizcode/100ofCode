const numbers = [89,73,84,91,87,77,94];
console.log(numbers);

let sorted = numbers.sort((a, b) => a - b); // For ascending sort
console.log(sorted);

let resultRange = sorted[sorted.length-1] - sorted[0];
console.log(resultRange);

