let batch = 'Temperature Monitoring 25°C Morning Report Analysis';
let greeting = 'Greetings! ';

// Find the length of the string
let stringLength = batch.length;

// Substring of the string
let subStringWithEnd = batch.substring(12, 22);
let subStringWithOutEnd = batch.substring(12);

// Trim the whitespace
let trimmedString = batch.trim();

// Find a word in the string
let foundSearchedWord = batch.includes('Monitoring');
let foundSearchedWordWithPosition = batch.includes('Monitoring', 10);

// Find a string at the beginning and end
let stringStartsWith = batch.startsWith('Temperature');
let stringEndsWith = batch.endsWith('Analysis');

// Find the index of the string
let indexOfSearchedKeyWithOutPosition = batch.indexOf('Morning');
let indexOfSearchedKeyWithPosition = batch.indexOf('25°C', 5);

// Find the last index of the string
let lastIndexOfSearchedKey = batch.lastIndexOf('Report');
let lastIndexOfSearchedKeyWithPosition = batch.lastIndexOf('Morning', 30);

// Replace the existing string
let replacedString = batch.replace('Monitoring', 'Tracking');
let replaceAllMatchingString = batch.replaceAll('Report', 'Summary');

let colors = 'Red,Green,Blue,Yellow,Purple,Orange';

// Split the string into an array
let arrayOfColorsAfterSplit = colors.split(',');
let arrayOfColorsAfterSplitWithLimit = colors.split(',', 3);

// String Concat
let concatenedString = batch.concat(' Weather', colors, ' Update');

// Basic functions
let upperCaseString = batch.toUpperCase();
let lowerCaseString = batch.toLowerCase();
let newGreetings = greeting.repeat(2);
let findCharacterBasedOnPosition = batch.charAt(15);
let findAsciiCode = batch.charCodeAt(20); // ASCII T - 84, t - 116