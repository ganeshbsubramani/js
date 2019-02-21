// a program to find the length of name entered by user.
 string = 'My name is ';
 userName = 'Ganesh';
 fullName = string + userName; 
 getName = fullName.slice(string.length-1);
console.log(getName);
// convert in to proper name like London , Manchester.
var cityNames = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
console.log(cityNames);
for (var i =0 ;i<cityNames.length;i++){
    var cityName = cityNames[i].toLowerCase();
    var firstChar = cityName.charAt(0);
    var cityName = cityName.replace(firstChar,firstChar.toUpperCase());
    cityNames[i] = cityName;
}
console.log(cityNames);