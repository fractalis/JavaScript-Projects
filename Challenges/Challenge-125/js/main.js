
function Customer(Name, Address, City, State, ZipCode, DiscountLevel) {
    this.CustomerName = Name;
    this.CustomerAddress = Address;
    this.CustomerCity = City;
    this.CustomerState = State;
    this.CustomerZipCode = ZipCode;
    this.CustomerDiscountLevel = DiscountLevel;
}

function constructObject() {
    var customer = new Customer("Joe Summers", "555 Cherry St", "Summers", "Ohio", "55555", "Platinum");

    document.getElementById("destinationContainer").innerHTML = "Customer Name: " + customer.CustomerName + "<br>Customer Address: " + 
        customer.CustomerAddress +  "<br>Customer City: " + customer.CustomerCity + "<br>Customer State: " + customer.CustomerState + 
        "<br>Customer ZipCode: " + customer.CustomerZipCode + "<br>Customer Discount Level: " + customer.CustomerDiscountLevel;
}