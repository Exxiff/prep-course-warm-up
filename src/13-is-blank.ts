export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
// || is OR
function isBlank(str: string | null): boolean {
  if (str === null || str.trim() === "") return true;
  return false;
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" 1231 ")); // Expected output: false
console.log(isBlank(" $@#3 "));// Expected output: false
console.log(isBlank(" D212d "));// Expected output: false
console.log(isBlank("_abc "));// Expected output: false
console.log(isBlank(" abc_"));// Expected output: false
console.log(isBlank("   abc "));// Expected output: false