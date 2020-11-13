function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function PlayerObject(PlayerName, PlayerLives, PlayerLevel, PlayerScore) {
    this.PlayerName = PlayerName;
    this.PlayerLives = PlayerLives;
    this.PlayerLevel = PlayerLevel;
    this.PlayerScore = PlayerScore;
}

function CreatePlayerObject() {

    var playerObject = new PlayerObject("bobtheplayer", 3, 1, 0);

    document.getElementById("New_and_This").innerHTML = playerObject.PlayerName + " has " + playerObject.PlayerLives +
        " lives and is starting on level " + playerObject.PlayerLevel + " with a score of " + playerObject.PlayerScore;
}

function createMonster() {
    
    function createOrc() {
        return {
            monsterType: "Orc",
            hitPoints: 15,
            attacks: "Sword",
            damageDice: "1d6"
        };
    }

    function createDragon() {
        return {
            monsterType: "Dragon",
            hitPoints: 100,
            attacks: "Fireball",
            damageDice: "6d4"
        };
    }

    var dragon = createDragon();
    var orc = createOrc();

    document.getElementById("Nested_Function").innerHTML = "Monster Encounter: " + dragon.monsterType;
}