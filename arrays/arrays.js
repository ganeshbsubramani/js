// define an array
arrayDefinition = [];
console.log (arrayDefinition.length);
arrayDefinition = ['apple' , 'orange', 'banana' ]
 copyarray = arrayDefinition.slice();

//adding it at last
arrayDefinition.push('parsimon');
console.log(arrayDefinition);

//removing last item.
arrayDefinition.pop();
console.log(arrayDefinition);

//accessing first item.
firstItem = arrayDefinition.shift();
console.log(firstItem);
console.log(arrayDefinition);

//remove one item from array starting from index 0.
var removedItems = arrayDefinition.splice(0,1);
console.table(removedItems);
console.log(arrayDefinition);
console.log ("Copied array is:");
console.log(copyarray);

// loop an array
copyarray.forEach(function(item, index, array){
    console.log(index, item);
}
);

//first element 
console.log(copyarray[0]);

//find average of numbers
var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach(function(item,index,numbers){
     sum+=item;
})
console.log(sum);
console.log("Average of given numbers is:" + sum/numbers.length);

// reverse the array;
numbers.reverse();
console.log(numbers);

//fill the array from position 4 with 2 and 6.
numbers.fill(4,2,6);
console.log(numbers);

// filter the string which contains vowel
var char = 'a';
var vegetables = ['brinjal','cucumber'];
const result =  vegetables.filter(vegetable => vegetable.includes(char));
console.log(result);

// Create an array named colors that contains five different names of colors as strings.
var colors = ['blue', 'brown', 'red', 'green', 'yellow']

// Access the first color in the array and print it to the console using console.log()
console.log(colors[0]);

//Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log(colors[2]);

// Write one line of code that changes the value of the last color in the list to "ultraviolet"
colors[colors.length-1]='ultraviolet';
console.log(colors);

// Create a new variable called fourthColor and set it equal to the fourth color in the list.
fourthColor = colors[3];
console.log(fourthColor);

//Add another color to the end of the list.
colors.push('cyan');
console.log(colors);

// Add another color to the beginning of the list.
colors.unshift('white');
console.log(colors);

// Print the length of the array to the console with console.log()
console.log(colors.length);

// Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop();
console.log(colors);

// Write a for loop to iterate through every color in the array and print each color's value to the console.
colors.forEach(function(item,index,colors){
    console.log(item);
})

// another for loop.
colors.forEach(color => console.log(color));

//Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
colors.forEach(function(item,index,colors){
    console.log(index , item);
})