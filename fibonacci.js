//This function returns fibonacci series by for loop. 
function fiboFor(number){
    let fiboList = [0, 1];
    for(let i = 3; i <= number; i++){
        fiboList.push(fiboList[i-2] + fiboList[i-3]);
    }
    return fiboList;
}

console.log(fiboFor(5));
console.log(fiboFor(10));

//This function returns a fibonacci number in a recursive way. 
function fiboNumRecursive(number){
    if(number == 2) return 1;
    else if(number == 1) return 0;
    else return (fiboNumRecursive(number-1) + fiboNumRecursive(number-2));
}

console.log(fiboNumRecursive(5));
console.log(fiboNumRecursive(10));

//This function returns fibonacci series in a recursive way. 
function fiboRecursive(number){
    
    if(number == 1) return [0];
    if(number == 2) return [0, 1];
    else{
        fiboList = fiboRecursive(number -1);
        fiboList.push(fiboList[number-2] + fiboList[number-3]);
        return fiboList;
    }
}

console.log(fiboRecursive(5));
console.log(fiboRecursive(10));