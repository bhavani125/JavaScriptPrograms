/**
 *  takes date and month from the command line and prints true,
 *  if it is between March 20 and June 20,  otherwise it will print false.
*/

const readline = require("prompt-sync");
const prompt=readline();

// taking input from user
let date = prompt("Enter a date ");
console.log(date);
let month = prompt("Enter a month ");
console.log(month);

//checking condition of date and month
if( (month == 3 && date >= 20 && date < 31 ) || (month == 4 && date >= 1 && date < 30) 
     || (month == 5 && date >= 1 && date < 31) || (month == 6 && date <= 20) ){
    console.log("True")
}
else{
    console.log("False")
}