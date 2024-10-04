// Hoisting with var
console.log(greeting); 
var greeting = 'Good Morning!';
// After declaration
console.log(greeting); 

// Hoisting with let
// console.log(day); 
let day = 'Tuesday';
console.log(day); 

// Hoisting with const
// console.log(weather); 
const weather = 'Sunny';
console.log(weather); 

// Trying to change the value of const will result in a TypeError
// weather = 'Rainy'; 

// Hoisting with Function Declaration
showMessage(); 
function showMessage() {
  console.log('Hello, welcome!');
}

// Hoisting with Function Expression
console.log(alertMessage); 

var alertMessage = function() {
  console.log('Alert: This is a function expression!');
};

// Calling it after the declaration 
alertMessage(); 