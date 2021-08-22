/**
 * takiing a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
 */
const readline = require("prompt-sync");
const prompt=readline();

const num = prompt("Enter a range to get power of two: ")

for(i = 0; i <= num; i++) { 
    console.log(Math.pow(2, i))
}