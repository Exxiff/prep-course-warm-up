export {};

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function sum(numbers: number[]) {
  const total = 0;
  return numbers.reduce((total, num) => total + num);
}

function multiply(numbers: number[]) {
  const total = 1;
  return numbers.reduce((total, num) => total * num);
}
function power(number: number, power: number) {
  return Math.pow(number, power);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
