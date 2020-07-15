/* Splice function: 
arr.plice(indexOfTheNumber, howManyNumbers) 

we can remove an element of an array by this splice method. 

*/

// This is process 1. 
function removeDuplicate1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

numbers = [20, 65, 45, 20, 45];
numbers = removeDuplicate1(numbers);
console.log(numbers);

// This is process 2. 
function removeDuplicate2(arr){
    newArr = [];
    for(i = 0; i < arr.length; i++){
        index = newArr.indexOf(arr[i]);
        if(index = -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

numbers = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
numbers = removeDuplicate1(numbers);
console.log(numbers);