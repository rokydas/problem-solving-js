function factFor(number){
    let product = 1;
    for(let i = 1; i <= number; i++){
        product = product * i;
    }
    return product;
}

console.log(factFor(5));
console.log(factFor(170));
console.log(factFor(15));

function factWhile(number){
    let i = 1;
    let product = 1;
    while(i <= number){
        product = product * i;
        i++;
    }
    return product;
}

console.log(factWhile(5));
console.log(factWhile(170));
console.log(factWhile(15));

function factRecursive(number){
    if(number == 0){
        return 1;
    }
    else{
        return number * factRecursive(number - 1);
    }
}

console.log(factRecursive(5));
console.log(factRecursive(170));
console.log(factRecursive(15));