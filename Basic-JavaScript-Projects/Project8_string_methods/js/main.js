
function concatDemo() {

    // Declare our variables
    var intro = "You are standing in a dimly lit room.";
    var intro_2 = " A flickering light bulb hangs overhead.";
    var intro_3 = " In front of you is a solid steel door.";

    // Concat the strings together
    intro = intro.concat(intro_2, intro_3);

    // Display the concatenated string to the user.
    document.getElementById('string-container').innerHTML = intro;
}

function sliceDemo() {
    // Get the contents of the element so we can slice it.
    var txtToSlice = document.getElementById('slice-container').innerHTML;

    // Display the sliced text inside the container to the user.
    document.getElementById('slice-container').innerHTML = 
        txtToSlice.slice(5,18);
}

function uppercaseDemo() {
    // Get the text we want to convert to all uppercase
    var txtToUppercase = document.getElementById('uppercase-container').innerHTML;

    // Replace the text with the uppercase version
    document.getElementById('uppercase-container').innerHTML =
        txtToUppercase.toUpperCase();
}

function searchDemo() {
    // Get the text we want to search the username for
    var txtToSearch = document.getElementById('search-container').innerHTML;
    
    // Tell user what position we found the username at
    document.getElementById('search-container').innerHTML =
        "Username found at position: " +  txtToSearch.search("bobtheplayer");
}

function toStringDemo() {
    // Get pi
    var pi = Math.PI;

    // Convert pi to a string and display to user
    document.getElementById('to-string-container').innerHTML = pi.toString();
}

function toPrecisionDemo() {
    // Declare pi to 24 places
    var pi = 3.14159265358979323846264;

    // Display Pi down to 6 digits using the toPrecision method.
    document.getElementById("to-precision-container").innerHTML = pi.toPrecision(6);
}

function toFixedDemo() {
    // Declare Euler's Number
    var e = 2.71828182845904;

    // Display e down to 4 decimal places.
    document.getElementById("to-fixed-container").innerHTML = e.toFixed(4);
}

function valueOfDemo() {
    // Declare our string
    var str = "It was the best of times, it was the worst of times";

    document.getElementById("value-of-container").innerHTML = str.valueOf();
}

