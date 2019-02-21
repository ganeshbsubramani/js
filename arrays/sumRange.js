/**
 * Author : Ganesh Subramani Babu
 * Date : 02/13/2019
 */

 /**
  * Write a range function that takes two arguments, start and end, and returns
  *  an array containing all the numbers from start up to (and including) end.
  * @param {*} start number
  * @param {*} end number
  * @para {*} step number to be increemented.
  * returns array 
  */
 function range (start, end){
     console.log("here");
     let numbers = [];
     
     let correctEnd = start > end ? start : end;
     let correctStart = end < start ? end : start;

     for ( var i = correctStart; i <= correctEnd; i = i + step){
        numbers.push(i);
     }
     return numbers;
 }

 /**
  * write a sum function that takes an array of numbers and returns the
  *  sum of these numbers.
  * @param {*} numbers 
  */

 function sum(numbers){
     let sum = 0;
     for (var i =0; i < numbers.length; i++){
         sum += numbers[i];
     }
     return sum;
 }
  console.log(range(5,2,-1));
//  console.log(sum(range(5, 2, -1)));