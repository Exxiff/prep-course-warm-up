export {};
function truncateString(text:string,length:number){
// 0 for first string
    return text.slice(0,length)
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
