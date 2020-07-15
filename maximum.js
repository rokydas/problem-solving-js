//Maximum between 2 variables
let a = 100;
let b = 100;

if(a>b){
    console.log("A is greater than B");
}
else if(b>a){
    console.log("B is greater than A");
}
else{
    console.log("Both are equal");
}

//Maximum among 3 variables
a = 500;
b = 500;
c = 500;

if(a>b && a>c){
    console.log("A is the greatest value.");
}
else if(b>c && b>a){
    console.log("B is the greatest value.");
}
else if(c>a && c>b){
    console.log("C is the greatest value.");
}
else{
    console.log("The three values are equal.");
}

//Math.max function ==> we can put any number of values in this function to find out the maximum values. 
let max = Math.max(12, 45, 789, 4574, 0, 4, 45, 23, 85412, 54, 635, 4521);
console.log(max);

//Apply Math.max function to an array using for loop. 
let arr = [12, 45, 789, 4574, 0, 4, 45, 23, 85412, 54, 635, 4521];

max = arr[0];
for(let i = 1; i < arr.length; i++){
    max = Math.max(max, arr[i]);
}
console.log(max);

//Apply Math.max function to an array without loop. 
max = Math.max(...arr);
console.log(max);