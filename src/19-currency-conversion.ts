export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function

//NO MAGIC NUMBERS!!!!
const GBPtoUSD = 1.4;
const GBPtoBRL = 6.33;
const exchangeFee = 0.01;
function convertCurrency(price: number, exchangeRate: number) {
  
  const convertedCurrency = price * exchangeRate + (price * exchangeFee);
  return convertedCurrency.toFixed(2);
}
/*function convertToUSD(price:number) {
    let conversionRate = 1.4 
    return (price * conversionRate).toFixed(2)
}
// You are allowed to change this function
function convertToBRL(price:number) {
    let conversionRate = 6.33 
    return (price * conversionRate).toFixed(2)
}*/

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertCurrency(price, GBPtoUSD);
const priceInBRL = convertCurrency(price, GBPtoBRL);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
