export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */
//function goThroughNumbers(start: number, end: number) {
//    for (let i = start; i <= end; i++)
const sumAll = function (start: number, end: number) {
    let sum = 0
  for (let i = start; i <= end; i++) {
    
    sum += i;
  }
  return sum
};

console.log(sumAll(1, 4)); // Expected output: 10
console.log(sumAll(-3, 2));
console.log(sumAll(-5, -2));
console.log(sumAll(-2, 2));
console.log(sumAll(0, 1));
console.log(sumAll(12, 14));
console.log(sumAll(11, 2));