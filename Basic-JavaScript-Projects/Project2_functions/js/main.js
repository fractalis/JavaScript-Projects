var counter = 0; /* Initialize counter to 0 */

function handleButtonClick() {
    counter += 1; /* Increment counter by 1 */
    
    /* Write out current value of counter to element denoted by ID: mainParagraph */
    document.getElementById("mainParagraph").innerHTML = counter; 
}

function handleStringConcatenation() {

    /* Initialize setting variable */
    var setting = "You find yourself in a dark labryinth. ";

    /* Concatenate another string to setting variable */
    setting += " The air is musty and rats scury at your feet.";

    /* Write out setting variable to target element */
    document.getElementById("concatTarget").innerHTML = setting;
}