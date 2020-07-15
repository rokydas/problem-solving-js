//Swapping using temp variable
let num1 = 25;
let num2 = 50;

console.log("Before swapping Num1 is " + num1 + " and Num2 is " + num2);

let temp = num1;
num1 = num2;
num2 = temp;

console.log("After swapping Num1 is " + num1 + " and Num2 is " + num2);

//Swapping without temp variable
num1 = 25;
num2 = 50;

console.log("Before swapping Num1 is " + num1 + " and Num2 is " + num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After swapping Num1 is " + num1 + " and Num2 is " + num2);