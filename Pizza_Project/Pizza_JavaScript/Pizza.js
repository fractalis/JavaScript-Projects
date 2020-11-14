function getReceipt() {
    // This initialize our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    // Get all elements with classname "size"
    var sizeArray = document.getElementsByClassName("size");
    
    for(var i = 0; i < sizeArray.length; i++) 
    {
        // Determine which size is checked and add it to the receipt
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    // Determine base cost of pizza based on size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Set running total to sizeTotal
    runningTotal = sizeTotal
    console.log(selectedSize + " = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // These variables will get passed on to each function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal  = 0;
    var selectedTopping = [];
    // Get all toppings based on their css class name
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        // If topping is selected, add it to selected toppings and append to receipt
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }

    // Get total amount of toppings
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {

        // Get total, giving one free toppings
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Get running total
    runningTotal = (runningTotal + toppingTotal);

    // Log debug info to console
    console.log("total selected topping items: " +toppingCount);
    console.log(toppingCount+ " topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+ text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");

    // Display receipt to user
    document.getElementById("showText").innerHTML = text1;

    // Display total price to user
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
}