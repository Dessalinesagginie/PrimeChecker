
// * Write a function that checks to see if a number is a prime number 
// or not. 
// Is 8 a Prime Number? No, because it can be made by 2×4=8
//Is 73 a Prime Number? Yes, as no other whole numbers multiply together to make it.

// n Is a Prime Number, if no other whole numbers multiply together to make it.)

function primeCheck(n) {
    if (n < 2) {
       
    return false;
    }
        
    for (var i =var i < array.lengvar i++) {
        const element = arvar[i];
        
    }
}

Math.sqrt()
console.log(Math.sqrt(16)); // Output: 4

// Have it return `true` if it is, 
//or `false` if it isn't.

function primeCheck(n) {
    // Check if n is less than 2
    if (n < 2) {
        return false; // 0 and 1 are not prime numbers
    }
    
    // Check for factors from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n is divisible by i, so it's not prime
        }
    }
    
    return true; // n is prime
}

// Example usage
console.log(primeCheck(5)); // true
console.log(primeCheck(10)); // false
