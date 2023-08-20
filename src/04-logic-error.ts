export {};
//trim() removes spaces
function trimWord(word:string) {
  return word.trim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
