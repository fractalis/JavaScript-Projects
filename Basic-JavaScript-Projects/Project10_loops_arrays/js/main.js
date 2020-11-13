function Call_Loop() {
    // Declare Variables
    var max = 10;
    var counter = 0;
    

    // While counter is less than or equal to max
    while (counter <= max) {

        // Display the square of counter to the user
        document.getElementById("Loop").innerHTML += "<br>" + (counter*counter);
        counter++;
    }
}

function stringLengthDemo() {
    // Variable declarations
    var intro = "In the first age there were the Seven.";
    // Display the length of the string to the user
    document.getElementById("string-length-container").innerHTML = "Length of 'intro': " + intro.length;
}

function for_Loop() {
    // Variable declarations
    var Instruments = ["Bass Guitar", "Electric Guitar", "Drums", "Keyboard"];

    // Iterate over instruments array
    for(var i = 0; i < Instruments.length; i++) {

        // Append each instrument to the 'List_of_Instruments' p element
        document.getElementById("List_of_Instruments").innerHTML += "<br>" + Instruments[i];
    }
}

function array_Function() {
    // Variable Declarations
    var MonsterEncounter = ["Orc", "Kobold", "Goblin"];

    // Iterate over MonsterEncounter array
    for(var i = 0; i < MonsterEncounter.length; i++) {

        // Write out each Monster to the 'Array' p element
        document.getElementById("Array").innerHTML += "<br>"+MonsterEncounter[i];
    }
}


// Declare a constant Player Object
const PLAYER_OBJECT = {
    PlayerName: "bobtheplayer",
    PlayerId: 567,
    PlayerRealm: "North America"
};

function constant_function() {
    // Output the Player object to the user
    document.getElementById("Constant").innerHTML = "Player Name: " + PLAYER_OBJECT.PlayerName + 
        "<br>Player ID: " + PLAYER_OBJECT.PlayerId + "<br>Player Realm: " + PLAYER_OBJECT.PlayerRealm;

    // Modify the properties and add a new one
    PLAYER_OBJECT.PlayerId = 569;
    PLAYER_OBJECT.PlayerStatus = "Active";

    // Output the modified property and new property to the user
    document.getElementById("Constant").innerHTML += "<br>New Player ID: " + PLAYER_OBJECT.PlayerId +
        "<br>Player Status: " + PLAYER_OBJECT.PlayerStatus;
}

function let_function() {
    // Declare current user
    var user = "bobtheuser";

    // Output current user to 'let-keyword-container'
    document.getElementById("let-keyword-container").innerHTML = "Current User: " + user;
    {
        // Declare a new current user using let keyword
        let user = "alicetheuser";

        // Output that current user to the 'let-keyword-container'
        document.getElementById("let-keyword-container").innerHTML += "<br>Current User: " + user;
    }
    // Output the current user again to the 'let-keyword-container'
    document.getElementById("let-keyword-container").innerHTML += "<br>Current User: " + user;
}

// Challenge: Define and learn how to use the JavaScript return statement.

// Declare a function that takes n
function makeDoubleAdder(n) {

    // Return a function that adds n+n together
    return function() {
        return n+n;
    }
}

// Call makeDoubleAdder to return the function then call the returned function
console.log(makeDoubleAdder(10)());


function object_creation() {
    // Create an object using the "let" keyword
    let player = {
        playerName: "bobtheplayer",
        lives: 3,
        score: 0,
        level: 1,
        attack: function() {
            return "You draw your sword and attack";
        }
    }

    document.getElementById("object-creation-container").innerHTML = "Player Name: " + player.playerName +
        "<br>Lives: " + player.lives + "<br>Score: " + player.score + "<br>Level: " + player.level + "<br>" +
        player.attack();
}

// Challenge: Define and learn how to utilize the break statement

function breakStatementDemo() {
    var randomNumber = Math.floor(Math.random()*100);
    var counter = 0;
    while(true) {
        if(counter == randomNumber) {
            break;
        } else {
            counter++;
        }
    }
}

breakStatementDemo();

// Challenge: Define and learn how to utilize the continue statement
function continueStatementDemo() {
    var alertTriggers = [1, 5, 9];

    for(var i = 0; i < 10; i++) {
        let shouldContinue = false;
        for(var j = 0; j < alertTriggers.length; j++) {
            if(alertTriggers[j] == i) {
                shouldContinue = true;
            }
        }

        if(shouldContinue) {
            continue;
        }
    }
}

continueStatementDemo();