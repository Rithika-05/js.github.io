// IIFE (Self-invoking function)

(function Execute() {
    console.log("Executing this self-invoking function");
})();

(() => {
    console.log("This is an arrow function IIFE");
})();

(function(city) {
    console.log("I enjoy visiting", city);
})("New York");
