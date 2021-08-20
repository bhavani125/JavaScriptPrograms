/**
 *  takes input from user and checks wheather it is leapyear or not.
*/

const readline = require("prompt-sync");
const prompt=readline();

//taking input from user
let year = prompt("Enter year (yyyy): ");

//checking condition of leapyear
if( (year %4 == 0) && (year %100 != 0) || (year %400 == 0) ){
  console.log("Its a leap year")
}
else{
  console.log("Its not a leap year")
}
