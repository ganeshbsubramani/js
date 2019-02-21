/*
A program to compute the factorial of given number.
**/

console.log(factorialBf(5));
console.log(factorial(5));

/*
compute using a brute force.
**/

function factorialBf(number){
    var factorial = 1;
    if (number == 0 || number == 1) return 1;
    for (var i =1; i <= 5; i++){
        factorial *=i;

    }
    return factorial;
}

/*
compute factorial using recursion.
**/

function factorial(number){
    if (number == 1 || number == 0) return 1;
    return number * factorial(number - 1);
}