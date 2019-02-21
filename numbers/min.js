/*
Write a function min that takes two arguments and returns their minimum
Author : Ganesh Subramani Babu
Date : 02/10/2019.
**/

/**
 * return minimum of two numbers. Note it uses arrow function style.
 * @param {*} value to compare.
 * @param {*} number2 to compare.
 */
 const min = (number1 , number2) => {
    return number1 < number2 ? number1 : number2;
};

console.log(min(20,15));