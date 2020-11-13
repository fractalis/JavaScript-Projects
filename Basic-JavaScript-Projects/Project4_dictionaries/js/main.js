
// Declare a playerObject Dictionary
var playerObject = {
    PlayerName: "bobtheman",
    Score: 0,
    Lives: 3,
    Level: 1,
};

// Declare a Function that will Display Player Name
function displayPlayerName() {

    // But Oops, we Delete Player Name before we display it
    delete playerObject.PlayerName;

    // We will get "undefined" since PlayerName is no longer in the Dictionary.
    document.getElementById("Dictionary").innerHTML = playerObject.PlayerName;
}