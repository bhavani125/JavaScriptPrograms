/**
 * taking input number from user and printing units tens hundread.....
 */

const readline = require("prompt-sync");
const prompt=readline();

//taking input from user
let num = prompt("Enter Number among 1,10,100,1000 : ");
		
if(num==1){
	console.log("unit");
}else if(num==10){
	console.log("Ten");
}else if(num==100){
	console.log("Hundred");
}else if(num==1000){
	console.log("Thousand");
}else if(num==10000){
    console.log("TenThousand");
}else if(num == 100000){
    console.log("Lakhs");
}else if(num == 1000000){
    console.log("Ten Lakhs");
}else if(num == 10000000){
    console.log("Crore");
}else{
	console.log("Invalid Number");
}


