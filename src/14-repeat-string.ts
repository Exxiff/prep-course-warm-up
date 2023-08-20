export {};

const repeatString = (str:string,times:number) => {
    return str.repeat(times)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
