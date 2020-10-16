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

//perfomance calculation
const t0 = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const t1 = performance.now();
setTimeout(function () { console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`); }, 0);
