export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (number: number[], funct: any) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const functResult:number[] = funct(number[i], i, number);
    result.push(functResult);
  }
  return result;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number: number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
// It's a miracle i got this to work!