/*
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
Author : Ganesh Subramani Babu
Date : 02/10/2019.
**/
const fizzBuzz = function(){
    for (var i = 1 ; i<100;i++){
        if (i %3 == 0){
            console.log(i +" : Fizz");
        }if (i % 5 == 0){
            console.log(i+ " : Buzz");
        }
        if ((i % 3 == 0) && (i % 5 == 0 )){
            console.log(i+ ": Fizz Buzz");
        }
    }
}
fizzBuzz();