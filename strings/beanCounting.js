/*
Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase “B” characters there are in the string
Author : Ganesh Subramani Babu
Date : 02/10/2019.
**/

 const countB = function(word){
    var countB = 0;
    const charArray = word.split('');
    for ( var i = 0 ;i < charArray.length; i++){
        if (charArray[i] == 'B')  countB++;
    }
    return countB;
 }

 /**
  * write a function called countChar that behaves like countBs, 
  * except it takes a second argument that indicates the character that is to be counted
  * @param {*} word on which search needs to happen.
  * @param {*} character to be searched for in the word.
  */
 const countChar = (word , character) => {
     var count = 0;
     const charArray = word.split('');
     for ( var i = 0; i<charArray.length; i++){
         if (charArray[i] == character) count++;
     }
     return count;
 }
 console.log(countB('Balabala'));
 console.log(countChar('Balabala', 'a'));