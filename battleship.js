var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var guesses =0;
var isSunk = false;
var hits = 0;

while(!isSunk){
    guess = prompt("Enter your guess:");
    if (guess < 0 || guess >6){
        alert("Please enter a valid number");
    }
    if (guess == location1||guess ==location2||guess==location3){
        hits++;
    }
    if(hits==3) {
        isSunk = true;
        document.write("<h1>You sank my battleship</h1>");
    }
}