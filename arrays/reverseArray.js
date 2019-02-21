/**
 * Array practice from eloquent java script.
 * Author : Ganesh Subramani Babu
 * Date : 02/13/209.
 */


 /**
  * reverseArray, takes an array as argument
  * and produces a new array that has the same elements in the inverse order.
  */

  function reverseArray(numbers){
    let reverse = [];
    let j = 0;
    for ( var i = numbers.length-1; i >=0 ; i--){
       reverse[j++] = numbers[i];
    }
    return reverse;
  }

  /**
   * reversing given array in place.
   * @param {*} numbers 
   */

  function reverseArrayInPlace(numbers){
     let i = 0;
     let j = numbers.length - 1;

     while (i<j){
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        i++;
        j--;
     }
     return numbers;
  }

  console.log(reverseArray([1,2,3]));
  console.log(reverseArrayInPlace([1,2,3]));
  