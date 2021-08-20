/**
 *  generating 5 random 3digit numbers,
 * and printing min and max numbers
*/

const MAXCOUNT = 5; 
let count = 0; 
const number=[]; 

//in this while loop it will generate 5 random numbers
while ( count < MAXCOUNT ) {
    number[count] = Math.floor( Math.random() * 900 ) + 100;
    count++;
}
//it will print 5 random numbers
console.log("Random numbers are: " +number);

let max = number[1];
let min = number[1];
for ( i = 0; i < number.length; i++) {
    if ( number[i] > max ) {
        max = number[i];
    }
    if ( number[i] < min ) {
        min = number[i];
    }
}
console.log("Maximum is : " +max);
console.log("Minimum is : " +min);