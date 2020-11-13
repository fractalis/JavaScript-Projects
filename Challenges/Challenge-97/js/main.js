function displayNaN() {
    var result = 100/'a';
    document.getElementById('nanTest').innerHTML = result;
}

function nanTrueTest() {
    var customerObject = {
        customerName: 'Sam Joe',
        customerId: 1,
        customerDiscount: 0.05
    };
    document.getElementById("nanTrue").innerHTML = isNaN(customerObject);
}

function nanFalseTest() {
    var score = 1000 / 2.5;

    document.getElementById("nanFalse").innerHTML = isNaN(score);
}