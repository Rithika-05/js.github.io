// Take another function as argument
const functionArgs = (a, b, callback) => {
    return callback(a, b);
};

const subtract = (x, y) => x - y;

console.log(functionArgs(10, 4, subtract)); // Output: 6


// Take another function as argument and return a function

function applyDiscount(fn, discount) {
    return function(...args) {
        return fn(...args) - discount;
    };
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

const totalWithDiscount = applyDiscount(calculateTotal, 20);

console.log(totalWithDiscount(100, 3)); // Output: 280 (100 * 3 - 20)
console.log(totalWithDiscount(50, 2)); // Output: 80 (50 * 2 - 20)


// Return a function (closure)

function createMultiplier(number) {
    return function(multiplier) {
        return number * multiplier;
    };
}

const multiply1 = createMultiplier(10);
console.log(multiply1(3)); // Output: 30
console.log(multiply1(5)); // Output: 50

const multiply2 = createMultiplier(6);
console.log(multiply2(4)); // Output: 24
console.log(multiply2(2)); // Output: 12
