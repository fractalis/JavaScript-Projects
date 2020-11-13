// This demonstrates creating a global variable.
var gameRunning = false;

function createBook() {
    // Create a book object. This demonstrates creating a local variable.
    var book = {
        bookTitle: "How to Program in JavaScript",
        yearPublished: 2020,
        author: "John Summers"
    };
}

// Demonstration of scope: book is out of scope here
function errorFunction() {
    console.log(book.bookTitle);
}

errorFunction();

function displayHour() {

    // Get the Current Hour
    var currentHour = new Date().getHours();

    // Display the Current Hour to the User
    document.getElementById('date-container').innerHTML = "Current Hour: " + currentHour;
}

// This function demonstrates an if-statement.
function checkIfGameRunning() {

    // Check if global var gameRunning is true
    if (gameRunning) {
        // Display text to user that game is running
        document.getElementById("game-container").innerHTML = "Game Running";
    } else {
        // Display text to user that game is not running
        document.getElementById("game-container").innerHTML = "Game Not Running";
    }
}

function handleGuess() {

    // Pick a random number between 1 - 10
    var randomNumber = Math.floor(Math.random() * 10);

    // Get the user's guess
    var guess = document.getElementById("guess-input").value;

    // If the user's guess is equal to the number chosen
    if(guess == randomNumber) {
        // Tell them they won
        document.getElementById("guess-result").innerHTML = "You guessed correctly!";
    } else {
        // Tell them to try again.
        document.getElementById("guess-result").innerHTML = "Sorry, please try again.";
    }
}

function Time_function() {
    
    // Get the current hours
    var Time = new Date().getHours();
    var Reply;

    
    if (Time < 12 == Time > 0) { // Check if time between 0 and 12
        Reply = "It is morning time"
    } else if (Time > 12 == Time < 18) { // Check if time between 12 and 18
        Reply = "It is the afternoon.";
    } else { // Else it is evening time
        Reply = "It is evening time.";
    }
    // Display Reply to the user.
    document.getElementById("Time_of_day").innerHTML = Reply;
}