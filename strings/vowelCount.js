/**
 * Get the number of vowels in given string.
 * Below method defines the expected vowels and then checks each character 
 * is present inside vowel array or not.
 * @param {*} input string which needs to be evaluated for number of vowels.
 */

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a','e','i','o','u'];
    
    for (var i =0;i<str.length;i++){
      if (vowels.includes(str.charAt(i))){
          vowelsCount++;
      }
    }
    
    return vowelsCount;
  }
  getCount('ganesa');