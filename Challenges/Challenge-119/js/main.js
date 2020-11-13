function Vote_Function() {
    var age = document.getElementById("Age").value;

    var result = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";

    document.getElementById("Vote").innerHTML = result;
}