// * Write a function that checks to see if a number is a prime number or not. 
// * Have it return `true` if it is, or `false` if it isn't.

function checkPrimeNumber(number){
  for (var i = 2; i < number; i++) { 
    var res = number % i 
    if (number % i === 0){
      
      return false
      
    }
  }
  return number > 1;


}

function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  for (var i = 2; i <= Math.sqrt(number); i++) {
    var rem = Math.sqrt(number)
    if (number % i === 0) {
      return false; // Found a divisor, not a prime
    }
  }
  return true; // No divisors found, it is prime
}

checkPrimeNumber(7)
isPrime(8)

//% operator in JavaScript (and other languages)--Modulus Operator. 
//calculates the remainder of the division of one number by another.
//Eg:
//5 % 2 = 1 because  5 / 2, = 2, remainder = 1.
//10 % 3 = 1 because 10 / 3 = 3, remainder = 1.
//8 % 4 = 0 because 8 / 4 = 2 with no remainder.
//In: number % i === 0, checks if number is divisible by i,  without any remainder. 
//If = 0, the number can be evenly / i, i.e.: i is a divisor of number. 
//This is a common check when determining if a number is prime. If number is divisible by any number other than 1 and itself, it is not prime.

//=== operator-- Strict Equality Operator. 
//checks whether 2 values are = and of the same type.
//Key Points:
//Type Comparison: Unlike-- loose equality operator (==), which performs type coercion (converting one or both values to a common type before comparison), === does not do this. 
//Both the value and type must match exactly for the comparison to return true.
//Eg:
//5 === 5 returns true (both value and type are the same).
//5 === '5' returns false (the value is the same, but the types are different: number vs. string).
//0 === false returns false (different types: number vs. boolean).
//In: number % i === 0, checks if the result of number % i (the remainder of number divided by i) = 0. 
//If it does, that number can be divided by i with no remainder, meaning i is a divisor of number.

//Purpose of return false;
//
//Immediate Exit from Function: By using return false;, the function immediately exits when it finds a divisor. 
//This is efficient because there’s no need to continue checking other possible divisors once it’s determined that the number is not prime.
//The line return false; is crucial because it allows the function to correctly identify when a number is not prime, 
// ensuring that the function behaves as expected according to the definition of prime numbers.