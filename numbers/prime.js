/*
Validate whethere given number is primenumber or not.
Author : Ganesh Subramani Babu
Date : 02/08/2019.
**/
num = prompt('Enter the number');
console.log(primenumber(num));
console.log(prime(num));
/**
 * This program is brute force of way determining whether the number is divisible by
 * anything other than itself.
 * @param {*} number to be determined for prime.
 */
function primenumber(number){
    var isPrime = true;
    for (var i = 2; i<number;i++){
        if (number % 2 == 0){
            isPrime = false;
            break;
        } 
    }
    return isPrime;
}

/**
 * Instead of looping through until the given number we can determine until sqrt of number.
 * @param {*} number to be determined for prime.
 */

function prime(number){
    var isPrime = true;
    for (var i = 2; i < Math.sqrt(number); i++){
        if (number % 2 == 0){
            isPrime = false;
            break;
        } 
    }
    return isPrime;
}