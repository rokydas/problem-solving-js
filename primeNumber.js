function primeNumber(n){
    isPrime = true;
    if(n == 1) return false;
    j = Math.floor(n/2);
    for(let i = 2; i<= j; i++){
        if(n % i == 0){
            isPrime = false;
            return isPrime;
        }
    }
    return isPrime;
}

if(primeNumber(23)) console.log("The number is a prime number");
else console.log("The number is not a prime number");