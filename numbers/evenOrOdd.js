const numbers = [1,2,3,4,5];
const even = numbers.filter(number => number%2 == 0);
console.log(even);
const odd = numbers.filter(number => number%2 == 1);
console.log(odd);

function isEven(number){
    number = Math.abs(number); // to make it work for negative numbers.
    if (number == 0 ) return true;
    if (number == 1 ) return false;
    return isEven(number - 2);
}

console.log(isEven(-2));