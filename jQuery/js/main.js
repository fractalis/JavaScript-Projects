$(document).ready(function() {


    function generateRandomColor() {
        // Generate r,g, and b values between 1 and 255
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        // Generate alpha value
        let a = Math.random();

        // Construct the color string and return it
        let colorString = `rgba(${r},${g},${b},${a})`;
        return colorString;
    }

    // Get all 'p' elements
    $("p").on({
        // Add a mouseover event
        "mouseover": function(eventObject) {
            // Set the specific target of the mouseOver event's background to a random color.
             eventObject.target.style.backgroundColor = generateRandomColor();
        }
    })

    // On startup, hide all columns then show them over 1.25 seconds
    $('.column').hide().show(1250);

    // Create a click handler for the animation-demo button
    $("#animation-demo").click(function() {
        
        // Grab the element with the given id and animate it over 1.5 seconds
        // with a random background color, font-size, and opacity.
        $('#animation-target-container').animate({
            width: "100%",
            backgroundColor: generateRandomColor(),
            fontSize: `${Math.random()*6}em`,
            opacity: Math.random()
        }, 1500);
    });
});