var winCount = 0;
var loseCount = 0;
var guessLeft = 6;
var playerGuess = [];
var results = "";

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess == computerGuess) {
        winCount += 1;
        results = "You got it right!";
    }
    else if (playerGuess.includes(userGuess)) {
        guessLeft -= 1;
        results = "You lost!";
    }
    else {
        guessLeft -= 1;
        results = "You lost!";
        playerGuess.push(userGuess);
    };

    if (guessLeft === 0) {
        loseCount += 1;
        guessLeft = 5;
        playerGuess = [];
    }
    else {

    };

    document.getElementById("title").innerHTML = "Welcome To The Psychic Game!";
    document.getElementById("guess").innerHTML = "Guess what the letter I'm thinking of";
    document.getElementById("wins").innerHTML = "Wins: " + winCount;
    document.getElementById("loses").innerHTML = "Loses: " + loseCount;
    document.getElementById("loses").innerHTML = "Loses: " + loseCount;
    document.getElementById("guessleft").innerHTML = "Guesses Left: " + guessLeft;
    document.getElementById("lettersleft").innerHTML = "Your guess so far: " + playerGuess;
};
