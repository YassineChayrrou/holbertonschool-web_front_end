let countPrimeNumbers = function () {
    const isPrime = (num) => {
        for(let i = 2; i < num; ++i)
          if(num % i === 0) return false;
        return true;
    }
    
    let numberOfPrimes = 0;
    for (let i = 2; i < 100; ++i) {
        if (isPrime(i) === true) {
            numberOfPrimes += 1;
        }
    }
    return numberOfPrimes
}