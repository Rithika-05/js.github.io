// For Loop 
var inventory = { "Laptop": 10, "Phone": 5, "Tablet": 8 };

for (var item in inventory) {
  for (var i = 0; i < inventory[item]; i++) {
    console.log("Processing sale for " + item + ". Remaining stock: " + (inventory[item] - i));
  }
}


// While Loop 
let x = 0;
let totalOrders = 10;
while (x < totalOrders) {
  console.log("Processing Order #" + (x + 1));
  x++;
}

// Do-While Loop 
let attempts = 0;
let maxAttempts = 3;
do {
  console.log("Welcome! Please log in. Attempt #" + (attempts + 1));
  attempts++;
} while (attempts < maxAttempts);

//  For-In Loop 
var customer = { name: "John Doe", membership: "Gold", location: "New York" };
for (let key in customer) {
  console.log(key + ": " + customer[key]);
}

//  For-Of Loop
var categories = ["Electronics", "Home Appliances", "Books", "Clothing"];
for (let category of categories) {
  console.log("Category: " + category);
}

// If-Else Statement 
function checkStockAndOrder(item, quantity) {
  if (inventory[item] >= quantity) {
    console.log("Order confirmed for " + quantity + " " + item + "(s).");
  } else if (inventory[item] > 0 && inventory[item] < quantity) {
    console.log("Only " + inventory[item] + " " + item + "(s) available. Order cannot be fulfilled.");
  } else {
    console.log(item + " is out of stock.");
  }
}

checkStockAndOrder("Laptop", 2);
checkStockAndOrder("Phone", 10);

// Switch Statement
let orderStatus = 3;
switch (orderStatus) {
  case 1:
    console.log("Order Received");
    break;
  case 2:
    console.log("Order Processed");
    break;
  case 3:
    console.log("Order Shipped");
    break;
  case 4:
    console.log("Order Delivered");
    break;
  default:
    console.log("Invalid order status.");
}

// Execution
function startOrder() {
  console.log("Order Process Started");
  checkCustomerDetails();
}

function checkCustomerDetails() {
  console.log("Customer Details Verified");
  checkInventory();
}

function checkInventory() {
  console.log("Inventory Checked");
  processPayment();
}

function processPayment() {
  console.log("Payment Processed");
}
startOrder();

//  Global and Function Execution 
var shopName = "Global Store";

function checkout() {
  var orderID = "ORD12345";
  function paymentProcessing() {
    var paymentMethod = "Credit Card";
    console.log(shopName);         
    console.log(orderID);          
    console.log(paymentMethod);    
  }
  paymentProcessing();
}

checkout();
