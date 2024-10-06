// Arrow Functions

// Single statement
let cube = x => x * x * x;
let multiplyNumbers = (x, y) => x * y;
let greetUser = () => console.log("This is an Arrow function without parameters");
greetUser();

// Multiple Statements
const calculateProduct = (a, b) => {
    const product = a * b;
    console.log(`The product of ${a} and ${b} is ${product}`);
    return product;
};

let productResult = calculateProduct(3, 4); // Output: The product of 3 and 4 is 12
console.log(productResult); // Output: 12

// Arrow function with callback
setTimeout(() => {
    console.log("Callback executed after timeout");
}, 3000);

// Returning an object
const carDetails = () => ({ make: "Tesla", model: "Model 3", type: "Electric" });

console.log(cube(3)); // Output: 27
console.log(multiplyNumbers(6, 7)); // Output: 42
