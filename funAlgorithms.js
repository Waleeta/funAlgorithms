// RUN THIS BY CALLING 'node funAlgorithms.js' in the terminal

// This function finds the highest prime number in the given alloted time (pass in number of seconds you want the function to keep looking for the next prime number).
function find_prime_number(timeNumber) {
    findAllPrimes(timeNumber)
}

function findAllPrimes(timeNumber) {
    var startTime = new Date().getTime();
    var number = 2 //mathematically, nothing below 2 is prime
    var largestPrime = number
    var timeLimit = timeNumber * 1000

    while ((new Date().getTime() - startTime) < (timeLimit)) {
        if (isPrime(number)) {
            largestPrime = number
        }
        number++
    }

    console.log(`Largest Prime Number Found: ${largestPrime}`)
    return null
}

function isPrime(number) {
    var halfNumber = Math.round(number / 2)
    for (let i = 2; i <= halfNumber; i++) { //O(n)
        if (number % i == 0) {
            return false
        }
    }
    return true;
}


// Explanation of function isPrime
// takes in a number from findAllPrimes loop
// in a for loop, checks to see if that number is divisible by *any* number =< itself/2 
// if the mod of a number is 0, it immediately returns false
// if the mod of a number is never 0, it returns true, because the loop has not found any other number it is divisible by.

console.log("FIND PRIME: -------------------------------------")
find_prime_number(5) // Will look for the highest prime number for 5 seconds. 


// ************************************************************************************* //

// This is a recursive "find the nth index fibonacci" function
function findNthFibIndex(i, a, b) {
    if (i === 1) {
        return 0
    } else {
        console.log('result', a + b)
        return findNthFibIndex(i - 1, b, a + b) //this works because we're incrementing a by passing it b, which is the result of a+b, which is the next fibonacci. "a" then equals b, the previous number. We then decrement i, and when we reach the base case (=== 1), we return the base case number (0)
    }
}

findNthFibIndex(8, 0, 1)
// fib sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
    // indices: [0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10 ]
