// Declare a function
function Ride_Function() {
    // Declare variables
    var Height, Can_ride;

    // Get element with ID Height
    Height = document.getElementById("Height").value;

    // Check if Height is less than 52, if it is assign the first result else assign the else condition
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    // Display result of Can_ride to element with ID ride.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Create a Constructor for a PlayerObject
function PlayerObject(PlayerName, PlayerLives, PlayerLevel, PlayerScore) {

    // Assign variables to the object
    this.PlayerName = PlayerName;
    this.PlayerLives = PlayerLives;
    this.PlayerLevel = PlayerLevel;
    this.PlayerScore = PlayerScore;
}

function CreatePlayerObject() {

    // Create an instance of the PlayerObject
    var playerObject = new PlayerObject("bobtheplayer", 3, 1, 0);

    // Print out the properties of the player object
    document.getElementById("New_and_This").innerHTML = playerObject.PlayerName + " has " + playerObject.PlayerLives +
        " lives and is starting on level " + playerObject.PlayerLevel + " with a score of " + playerObject.PlayerScore;
}

function createMonster() {
    
    // Declare a function that creates a monster object of type "Orc"
    function createOrc() {
        return {
            monsterType: "Orc",
            hitPoints: 15,
            attacks: "Sword",
            damageDice: "1d6"
        };
    }

    // Declare a function creates a monster object of type "Dragon"
    function createDragon() {
        return {
            monsterType: "Dragon",
            hitPoints: 100,
            attacks: "Fireball",
            damageDice: "6d4"
        };
    }

    // Create an instance of a Dragon and an Orc
    var dragon = createDragon();
    var orc = createOrc();

    // Print out a monster encounter to the element with the specified ID.
    document.getElementById("Nested_Function").innerHTML = "Monster Encounter: " + dragon.monsterType;
}