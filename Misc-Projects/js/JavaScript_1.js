function checkPlayerClass() {
    let classSelector = document.querySelector('input[name="playerClass"]:checked');
    let playerClass = '';

    if(classSelector) {
        playerClass = classSelector.value;
    }

    switch(playerClass) {
        case "warrior":
            document.getElementById("player-class-container").innerHTML = "Ahh, the Mighty Warrior. Nice Choice!";
            break;
        case "mage":
            document.getElementById("player-class-container").innerHTML = "The Wise Mage, Master of the Arcane. A masterful selection!"
            break;
        case "rogue":
            document.getElementById("player-class-container").innerHTML = "Hmm, the stealthy Rogue. A delightfully devious decision!";
            break;
        default:
            document.getElementById("player-class-container").innerHTML = "Please select a class.";
            break;
    }
}

function changeBackgrounds() {
    let columns = document.getElementsByClassName("column-a");

    for(var i = 0; i < columns.length; i++) {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        columns[i].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";
    }

    columns = document.getElementsByClassName("column-b");

    for(var i = 0; i < columns.length; i++) {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        columns[i].style.backgroundColor = "rgba("+r+","+g+","+b+",1)";
    }
}

function generateRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a = Math.random();

    let colorString = `rgba(${r},${g},${b},${a})`;

    return colorString;
}

function drawGraphic() {
    var canvas = document.getElementById('main-canvas');
    var ctx = canvas.getContext("2d");

    var grd = ctx.createRadialGradient(75, 45, 5, 90, 60, 100);
    
    for(var i = 0; i < 3; i++) {
        let grdDeg = Math.random();
        grd.addColorStop(grdDeg, generateRandomColor());
        
    }

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);

}

function drawLinearGradient() {
    var canvas = document.getElementById("linear-gradient-canvas");
    var ctx = canvas.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 200, 100);

    for(var i = 0; i < 10; i++) {
        let grdDeg = Math.random();
        grd.addColorStop(grdDeg, generateRandomColor());
    }

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}
