/*
Program to find the occurrences of characters in string.
Author : Ganesh Subramani Babu
Date : 02/11/2019.
**/

// create an object to hold the occurrence like key value pair.
let occurrences={};

/**
 * function to update the character and its occurrences.
 * @param {*} word 
 */

const findCharacters = (word) => {
    var charArray = word.split('');
    for (var i = 0 ; i<charArray.length; i++){
        if (occurrences.hasOwnProperty(charArray[i])){
            occurrences[charArray[i]]++;
        }else {
            occurrences[charArray[i]] = 1;
        }
    }
    return occurrences;
}
console.log(findCharacters("ganesa"));


// duplicate characters in a given string.
var input = "ganesa";
var characterCnt = input.split('').reduce(function( freq , current){
    if (current in freq){
        freq[current]++;
    }else{
        freq[current] = 1;
    }
    return freq;
},{});
console.log(characterCnt);

// above function in arrow format.
var string = "ganesa";
console.log(string.split('').reduce((freq , current) => {
    if (current in freq){
        freq[current]++;
    }else{
        freq[current] = 1;
    }
    return freq;
},{}));