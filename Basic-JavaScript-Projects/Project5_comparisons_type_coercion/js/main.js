document.write(typeof "Testing");

// Display positive infinity
function displayPositiveInfinity() {
    document.getElementById("positiveInfinity").innerHTML = 2E308;
}

// Displays Negative Infinity
function displayNegativeInfinity() {
    document.getElementById("negativeInfinity").innerHTML = -2E309;
}

function booleanTrue() {
    var playerLive = 3;
    var playerScore = 500;

    // Display a boolean true to the document
    document.getElementById("booleanLogicTrue").innerHTML = (playerLive > 0) && (playerScore > 0);
}

function booleanFalse() {
    var aliensLeft = 15;
    
    // Display boolean false to the document
    document.getElementById("booleanLogicFalse").innerHTML = aliensLeft < 5;
}

// Console.log
console.log(Math.PI * Math.PI);

// Type Coercion
document.write( "<p>Player Score: " + 500 + "</p>");

// Challenge: Display "false" in the console using Boolean logic and the console.log() method

// Declare Variables
var weaponPower = 0.2;
var bulletVelocity = 0.5;
var enemyArmor = 1.1;


// Check if result of calculation is greater than enemyArmor
var enemyHit = (weaponPower * bulletVelocity) >= enemyArmor;

// Write result out to document
document.write("<p>Enemy Hit: " + enemyHit + "</p>");

// Utilize == to Return "true" and "false"


// Declare variables
var ordersShipped = 50;
var ordersReceived = 50;

// Check if both values are equal and print out result to document
document.write("<p>ordersShipped == ordersReceived: " + (ordersShipped == ordersReceived) + "</p>");

var customersContacted = 25;
var customersReplied = 20;

// Check if both values are equal and print out result to document
document.write("<p>customersConcated == customersReplied: " + (customersContacted == customersReplied) + "</p>");

// Utilize === to return "true" and "false"

// 1. Return true by ensuring to match the data type and value.

// Declare Variables
var patientTestsConducted = 5;
var patientTestResultsCollected = 5;

// Check if both values match value and data type, print result out to document
document.write("<p>patientTestsConducted === patientTestResultsCollected: " + (patientTestsConducted === patientTestResultsCollected) + "</p>");

// 2. Return false by writing a different data type and different value.

// Declare Variables
var logEntry = "[11/13/2020 11:10:52] System received shutdown message";
var usersLoggedOn = 10;

// Check if both values match value and data type, print result out to document
document.write("<p>logEntry === uisersLoggedOn: " + (logEntry === usersLoggedOn) + "</p>");

// 3. Return false by writing a different data type but the same value for both.

// Declare Variables
var carsManufactured = 1550;
var votesCollected = "1550";

// Check if both values match value and data type, print result out to document
document.write("<p>carsManufactured === votesCollected: " + (carsManufactured === votesCollected) + "</p>");

// Return false by writing the same data type but a different value for both.

// Declare Variables
var unitsSold = 14500;
var usersSignedUp = 900;

// Check if both values match value and data type, print result out to document
document.write("<p>unitsSold === usersSignedUp: " + (unitsSold === usersSignedUp) + "</p>");


// Utilize the AND operator to display true and false.

// Declare Variables
var playerSelection = "Rock";
var computerSelection = "Scissors";

// Check if both values match value and data type, print result out to document
document.write("<p>Player Win? " + (playerSelection == "Rock" && computerSelection == "Scissors") + "</p>");

// Update variable
computerSelection = "Paper";

// Check if both values match value and data type, print result out to document
document.write("<p>Player Win? " + (playerSelection == "Rock" && computerSelection == "Scissors") + "</p>");

// Utilize the OR operator to display true and false.

// Declare Variables
var partNumberAStock = 90;
var partNumberBStock = 80;

// Check if Either value is greater than 0, print out result to document
document.write("<p>Any parts in stock? " + (partNumberAStock > 0 || partNumberBStock > 0) + "</p>");

// Declare Variables
var livesLeft = 0;
var continuesLeft = 0;

// Check if Either value is greater than 0, print out result to document
document.write("<p>Can keep playing? " + (livesLeft > 0 || continuesLeft > 0) + "</p>");


// Utilize the NOT operator to display true and false

// Declare Variables
var canShutdown = true;
var isRoot = false;

// Check if is not root, print out result to document
document.write("<p>Unable To Shutdown: " + !isRoot + "</p>");

// Check if isRoot and if they can not shutdown, print out result to document
document.write("<p>Able to Shutdown: " + (isRoot && !canShutdown) + "</p>");