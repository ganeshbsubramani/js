// flatten the arrays using reduce.
var scripts = [1,2,[3,4],[5,6]];
console.log(scripts.reduce((current,next) => current.concat(next),[]));

var x = [1,2,3,4];
// if we use brace we should use return statement : check rajiv.
console.log(x.reduce((current , next) => current + next, 0));