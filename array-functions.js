let climate = ['Sunny', 'Rainy', 'Cloudy', 'Windy', 'Snowy', 'Stormy'];

// Insert into an array end
let numberOfElementsInAnArrayAfterPush = climate.push('Foggy'); // 'Sunny','Rainy','Cloudy','Windy','Snowy','Stormy','Foggy'

// Insert into an array beginning
let numberOfElementsInAnArrayAfterUnShift = climate.unshift('Humid'); // 'Humid','Sunny','Rainy','Cloudy','Windy','Snowy','Stormy'

// Delete an item from array at the end
let deletedElementByPop = climate.pop(); // 'Humid','Sunny','Rainy','Cloudy','Windy','Snowy'

// Delete an item from array at the beginning
let deletedElementByShift = climate.shift(); // 'Sunny','Rainy','Cloudy','Windy','Snowy'

// Joining the array elements
let climateString = climate.join(',');

// Splicing an array (Changes the existing array)
let deletedElementAfterSplice = climate.splice(1, 2);
let deletedAndReplacedOneElementAfterSplice = climate.splice(1, 1, 'Dry');
let deletedAndReplacedTwoElementAfterSplice = climate.splice(0, 2, 'Mild', 'Freezing');

// Slicing of an array (Takes the portion of array without changing the existing array)
const slicedArrayWithEnd = climate.slice(0, 2);
const slicedArrayWithOutEnd = climate.slice(1);

// Find an element/item in an array
const isFoundSearchedItem = climate.includes('Rainy');

// Loops in Array
climate.forEach((item, index) => {
    console.log('Index : ' + index + ' Value : ' + item);
});

climate.forEach((item, index) => console.log('Index : ' + index + ' Value : ' + item));

climate.forEach(function(item) {
    console.log(item);
});

climate.forEach(function(item, index) {
    console.log('Index : ' + index + ' Value : ' + item);
});

// Map function
let newClimateList = climate.map(function(value, index) {
    return index;
});

let climateIndex = climate.map((value, index) => index);

let evenIndex = climateIndex.map(value => {
    if (value % 2 == 0)
        return value;
});

let animals = [
    {
        name: 'Elephant',
        id: 1,
        habitat: 'Savannah'
    },
    {
        name: 'Penguin',
        id: 2,
        habitat: 'Antarctica'
    }
];

let animalNames = animals.map(value => {
    return value.name;
});

let animalIds = animals.map(value => value.id);

let newAnimalList = animals.map(value => value);

// Filter functions
// Filter out array item which satisfies the condition
let evenIndexOfArray = climate.filter(function(value, index) {
    if (index % 2 == 0)
        return value;
});

let largeAnimals = animals.filter(value => {
    return value.habitat === 'Savannah';
});

// Some Function
// Return boolean if any of the array item satisfies the condition
let isEndangered = animals.some(value => value.habitat === 'Antarctica');

let isEndangeredArrowFunc = animals.some(value => {
    return value.habitat === 'Antarctica';
});

let isEndangeredAnimals = animals.some(function(value) {
    return value.habitat === 'Antarctica';
});

// Every function
// Return boolean if all of the array items satisfies the condition
let allInSavannah = animals.every(value => value.habitat === 'Savannah');

// Reduce function 
// Returns a single value based on provided function
let singleValue = climateIndex.reduce((sum, currentValue) => {
    return sum + currentValue;
}, 0);
