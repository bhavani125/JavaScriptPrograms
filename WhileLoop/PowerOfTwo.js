/**
 *  taking a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n 256.
 */
const readline = require("prompt-sync");
const prompt=readline();

//taking input from user
const num = prompt('Enter the value of n: ');

 let i=0
 
 while ( i <= num ) {
     let powerOf2 = Math.pow(2, i);
     if (powerOf2 <= 256) {
         console.log(powerOf2);
         i++;
     }
     else {
         break;
     }
 }