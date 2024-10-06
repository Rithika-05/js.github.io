//Anonymous Or Unnamed

// Immediately Invoked Function Expression (IIFE)
(function(){
    let x = 5;
    console.log("Value of x:", x);
})();

// Anonymous function with setTimeout
setTimeout(function(){
    let y = 15;
    console.log("Value of y:", y);
}, 2000);

// Anonymous function assigned to a constant
const Animal = function(type) {
    let pet = "Dog";
    console.log("My pet is a", pet, "and it's a", type);
};
Animal("Golden Retriever");
