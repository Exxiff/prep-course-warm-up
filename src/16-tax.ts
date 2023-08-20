export {};

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax(price:number) {
    const taxRate = 0.21
    return price * taxRate;
}
// task is not doable while only editing the given function !!!!!!
const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);
// to get expected output i added .toFixed(2) to round the sum to 2 decimal places.
console.log("Product: " + product);
console.log("Price: £" + price.toFixed(2));
console.log("Sales tax: £" + salesTax.toFixed(2));
console.log("Total: £" + (price + salesTax).toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
