export {};

const count = (sentence:string,wordToCount:string) => {
    const words = sentence.split(" ");
    let count = 0;
    for (const word of words) {
        if (word.toLowerCase() === wordToCount.toLowerCase()){
            count++;
        }
    }
    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
