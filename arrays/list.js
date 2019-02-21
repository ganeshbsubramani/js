/**
 * A program to explore the list data structure in JS.
 * Author : Ganesh Subramani Babu
 * Date : 02-13-2019.
 */


 /**
  * numbers array which when given would be converted to list.
  */

 function arrayToList(numbers){
    let list = null;
    for ( var i = numbers.length - 1; i>=0; i--){
        list = {value: numbers[i], next:list}
    }
    return list;
 }


 /**
  * Convert list to array.
  * @param {*} list 
  */

 function listToArray(list){
    let numbers =[];
    while(list != null){
        numbers.push(list['value']);
        list = list.next;
    }
   return numbers;
 }

 /**
  * @param {*} list 
  * @param {*} number 
  */

 function prepend(number, list){
    list = {value: number, next:list}
    return list;
 }

 /**
  * Return the nth item from list.
  * @param {*} list 
  * @param {*} item 
  */

 function nthList(list, item){
    let n = 0;
    while(list){
        if (n == item) break;
        list = list.next;
        n++;
    }
    return list;
 }

 /**
  * recursive style of returning nth item from list.
  * @param {*} list 
  * @param {*} item 
  */

 function nthRecursive(list, item){
    if (list == null ) return null;
    if (item == 0) return list;
    return nthRecursive(list.next, item-1);
 }

 console.log(nthRecursive(arrayToList([1,2,3]),2));