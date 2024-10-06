//Named function

// Without argument/parameters and without return type
function greet() {
    console.log("Hello, welcome to the JavaScript function examples!");
}

greet();

//With argument / parameters and without return type
function displayAge(age) {
    console.log(`You are ${age} years old.`);
}

displayAge(25);

//Without argument/parameters and with return type
function getCurrentTime() {
    let currentTime = new Date();
    return currentTime.toLocaleTimeString();
}

let time = getCurrentTime();
console.log(time);

// With argument/parameters and with return type
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 15));
