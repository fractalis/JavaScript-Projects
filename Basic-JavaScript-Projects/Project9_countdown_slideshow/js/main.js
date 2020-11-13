function countdown()  {
    // Get the number of seconds we want to countdown from.
    var seconds = document.getElementById("seconds").value;

    function tick() {
        // Decrement seconds
        seconds = seconds - 1;

        // Get the timer element
        var timer = document.getElementById("timer");

        // Set the inner HTML to the number of seconds
        timer.innerHTML = seconds;

        // Set timeout
        setTimeout(tick, 1000);

        // Alert when we time's up
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}

// Start at slide index 1
var slideIndex = 1;

// Call showSlides on the first slide
showSlides(slideIndex);

function plusSlides(n) {
    // Increment slideIndex by the specified n
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    // Set the current slide = to n
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    // Get all slides
    var slides = document.getElementsByClassName("mySlides");

    // Get all dots
    var dots = document.getElementsByClassName("dot");

    // If we have looped through all the slides, start back at the beginning
    if (n > slides.length) { slideIndex = 1};

    // If we are going backwards and reach the beginning, loop at the end
    if (n < 1) { slideIndex = slides.length; }

    // Hide all the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Set all the dots to not active
    for (i = 0; i < dots.length; i++ ) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current active slide
    slides[slideIndex-1].style.display = "block";

    // Make the current slide's dot active
    dots[slideIndex-1].className += " active";
}