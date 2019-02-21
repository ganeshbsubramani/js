//Remove duplicate items in arraySection
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
console.log(myArray.reduce((dupArray , item) => {
    if(dupArray.indexOf(item) == -1 ){
        dupArray.push(item);
    }
    return dupArray;
},[]));