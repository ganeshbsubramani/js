//Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedName = names.reduce(function(allNames , name){
    if (name in allNames) {
        allNames[name]++;
      }
    else {
        allNames[name] = 1;
    }
    return allNames;
},{})
// qn to rajiv on if i dont use a return value it throws an error.
console.log(countedName);

// above function in arrow format.
console.log(names.reduce((allNames, name) => {
    if (name in allNames){
        allNames[name]++;
    }else{
        allNames[name] = 1;
    }
    return allNames;
},{}));