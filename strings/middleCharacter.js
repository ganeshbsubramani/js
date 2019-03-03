/**
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
 * If the word's length is even, return the middle 2 characters.
 */

 /**
  * Get the middle character in string.
  * @param {*} s input string
  */

  // string is empty or null.
  // if string is test --> 4/2 -> 2 -> es 
  // if string is odd --> testing --> 7/2 -> 3
  // couple of other ways to solve problems are accessing the element using arrays 
  // or charAt method.
function getMiddle(s){

  if ( s == null || s == undefined) return null;

  if ( s.length % 2 == 0) return s.slice(s.length/2 - 1 , s.length/2 + 1);

  else return s.slice(s.length/2, s.length/2+1);
    
}

getMiddle("test");