var str = prompt("Enter your string:")
var strArray = str.split("");
var isPalindrome = true;
var lengthOfStr = strArray.length-1;
for (i=0;i<lengthOfStr/2;i++){
    if(strArray[i]!=strArray[lengthOfStr-i]){
        isPalindrome = false;
        document.write("<h1>It's not a palindrome</h1>");
        break;
    }
}
if(isPalindrome){
    document.write("<h1> Its a palindrome");
}