/**
 * UnitConversations
 */

const prompt = require('prompt-sync')({sigint: true});

// Converting  inch to feet.
const inch = prompt("Enter a number in inch: ");
let result = inch/12;
console.log(inch + " inch when converted to feet is "+ result + " feet");

// Converting feet to meter.
const length = prompt("Enter length in feet: ")
let converted_length = length/3.8;

const breadth = prompt("Enter breadth in feet: ")
let converted_breadth = breadth/3.8;

console.log("Converted length and breadth is: " + converted_length + "m and " + converted_breadth + "m" )

// Calculating area of 25 rctangular plots in acres.
let calculated_area = length * breadth;
console.log("Area in feet is: "+calculated_area)

let calculated_area_in_acres = calculated_area/43560;
console.log("Area in acres is: "+calculated_area_in_acres )

let total_area = 25 * calculated_area_in_acres;
console.log("Area of 25 plots is: " + total_area)