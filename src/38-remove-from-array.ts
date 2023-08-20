export {};

const removeFromArray = function (arr: number[], ...valueToRemove: number[]) {
  const newArray = [...arr];

  for (const value of valueToRemove) {
    const index = newArray.indexOf(value);
    if (index !== -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */
