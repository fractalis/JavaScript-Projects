function addNumbers() {
    // Calculate result of addition
    var result = 5+15;

    // Display result of addition to specified element.
    document.getElementById('Math').innerHTML = "5 + 15 = " + result;
}

function subtractNumbers() {
    // Calculate result of subtraction
    var result = 25-5;

    // Display result of subtraction to designated element
    document.getElementById('SubtractionResult').innerHTML = "25 - 5 = " + result;
}

function multiplyNumbers() {
    // Calculate the result of multiplication
    var result = 30*5;

    // Display the result to the designated element.
    document.getElementById('MultiplicationResult').innerHTML = "30 * 5 = " + result;
}

function divideNumbers() {
    // Calculate the result of division
    var result = 100/10;

    // Display the result to the designated element.
    document.getElementById('DivisionResult').innerHTML = "100 / 10 = " + result;
}

function simpleMath() {
    // Here we are performing a simple math operation
    var result = ((10 * 7) + 15 - 8) * 11;

    // Display the result of the math operation to the specified element.
    document.getElementById("MultipleOperatorResult").innerHTML = "((10 * 7) + 15 - 8) * 11 = " + result;
}

function modulusOperator() {
    // Find the remainer of the 10 / 3.
    var result = 10 % 3;

    // Display the remainer to the designated element.
    document.getElementById("ModulusOperatorResult").innerHTML = "10 % 3 = " + result;
}

function negationOperator() {
    // Declare a variable and initialize it to 10.
    var result = 10;

    // Display the negation of result to the specified element.
    document.getElementById("NegationOperatorResult").innerHTML = "-10 = " + -result;
}

// Initialize a global variable called counter and initialize it.
var counter = 0;

function incrementCounter() {

    // Increment counter by 1
    counter += 1;

    // Display the current value of counter to the specified element
    document.getElementById("counter").innerHTML = "Counter: " + counter;
}

function decrementCounter() {

    // Decrement counter by 1
    counter -= 1;

    // Display the current value of counter to the specified element
    document.getElementById("counter").innerHTML = "Counter: " + counter;
}

function generateRandomNumber() {

    // Generate a random number between 1 and 1000 and make sure we get an integer by taking the floor of it.
    var rndNumber = Math.floor(Math.random() * 1000);

    // Write the random number out to the specified element.
    document.getElementById("randomNumberContainer").innerHTML = rndNumber;
}

function pythagoreanTheorem(a, b) {

    // Find the hypotenuse of a triangle given by sides A and B.
    var result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    // Display the result of the calculation above to the specified element.
    document.getElementById('pythagoreanResult').innerHTML = result;
}