var winCount = 0;
var loseCount = 0;
var guessLeft = 10;
var playerGuess = [];
var results = document.getElementById("results");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess == computerGuess) {
        winCount += 1;
        results.textContent = "You Got It Right!";
    }
    else if (playerGuess.includes(userGuess)) {
        guessLeft -= 1;
        results.textContent = "You Already Guessed That Letter!";
    }
    else {
        guessLeft -= 1;
        results.textContent =  "Wrong Letter!";
        playerGuess.push(userGuess);
    };

    if (guessLeft === 0) {
        results.textContent =  "You Lost!";
        loseCount += 1;
        guessLeft = 10;
        playerGuess = [];
    }
    else {

    };

    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("loses").innerHTML = loseCount;
    document.getElementById("guessleft").innerHTML = guessLeft;
    document.getElementById("lettersleft").innerHTML = playerGuess;
};

