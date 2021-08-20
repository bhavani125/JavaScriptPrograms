/**
 * fliping the coin and printing the heads or tails
*/

//it will genearate random number 
const randomNumber = Math.floor( Math.random() * 2 ) + 1;

if ( randomNumber == 1 ) {
    console.log("Its a HEAD");
}
else {
    console.log("Its a TAIL");
}