/**
 * Write an algorithm to determine if a number is "happy".
   A happy number is a number defined by the following process: 
   Starting with any positive integer, replace the number by the sum 
   of the squares of its digits, and repeat the process until the number
   equals 1 (where it will stay), or it loops endlessly in a cycle which 
   does not include 1. Those numbers for which this process ends in 1 are 
   happy numbers.
 * @param {*} number 
 */

const number = function (number) {

    var set = new Set();
    var str = String(number);
    var isHappyNumber = true;
    var sum;

    if (number == 1) return true;
    set.add(number);
    while (sum!=1) {
        sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum += str.charAt(i) * str.charAt(i);
        }
        if (set.has(sum)){
            isHappyNumber = false;
            break;
        } else set.add(sum);
        str = String(sum);
    }
    return isHappyNumber;
}

console.log(number(19));