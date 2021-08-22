/**
 * taking command-line argument n and prints the nth harmonic number. 
 * Harmonic Number is of the form of
 * H(n) = 1/1 + 1/2 + 1/3 + 1/4 + ... + 1/n 
 */
const readline = require("prompt-sync");
const prompt=readline();

//taking input  from user
let number = prompt('Enter the value of n: ');
let sum = 0;

for(i=1; i <= number; i++){
    sum=sum+(1/i);
}
 console.log("Harmonic value for the entered value is: " + sum)




