/**
 * taking input number from user and printing WeekDays
 */
const readline = require("prompt-sync");
const prompt=readline();
 
// taking input from user
let num = prompt('Enter a number between 1 t0 7: ');

if(num == 1){
    console.log("Sunday")
}else if(num == 2){
    console.log("Monday")
}else if(num == 3){
    console.log("Tuesday")
}else if(num == 4){
    console.log("Wednesday")
}else if(num == 5){
    console.log("Thusday")
}else if(num == 6){
    console.log("Frieday")
}else if(num == 7){
    console.log("Saturday")
}else{
    console.log("You Enter Invalid Value")
}