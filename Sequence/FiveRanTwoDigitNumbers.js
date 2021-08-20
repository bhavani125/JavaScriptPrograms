/**
 * generating 5random numbers and find their sum and average.
 * 
 */

const MAXCOUNT = 5
let count=0
let sum = 0
let avg = 0
const num = []

while(count<MAXCOUNT){
    num[count] = (Math.floor(Math.random() * 90) + 10)
    sum = sum + num[count];
    count++;
}

console.log(" five random Numbers are: "+ num)
console.log("Sum is: "+ sum)

avg = sum/MAXCOUNT
console.log("Average is: "+ avg)