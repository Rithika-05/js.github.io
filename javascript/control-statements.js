// IF Statement
const movie = "Avengers";
const director = "Russo Brothers";

if (movie === "Avengers") {
  console.log(`The director of ${movie} is: ${director}`);
}

// IF-ELSE Statement
const rating = 8;

if (rating >= 8) {
  console.log("Movie is highly rated");
} else {
  console.log("Movie is not highly rated");
}

// IF-ELSE-IF Statement
const genre = "Action";

if (genre === "Action") {
  console.log("Movie is an action film");
} else if (genre === "Comedy") {
  console.log("Movie is a comedy film");
} else {
  console.log("Movie is of another genre");
}

// SWITCH Statement
const movieName = "The Shawshank Redemption";

switch (movieName) {
  case "The Godfather":
    console.log("Directed by Francis Ford Coppola");
    break;
  case "The Shawshank Redemption":
    console.log("Directed by Frank Darabont");
    break;
  default:
    console.log("Unknown movie");
}

// LOOPS

// FOR Loop
console.log("Movie Titles:");
const movieTitles = ["Inception", "Interstellar", "The Dark Knight"];
for (let i = 0; i < movieTitles.length; i++) {
  console.log(movieTitles[i]);
}

// WHILE Loop
console.log("Movie Ratings:");
let ratings = [8, 9, 7, 8, 9];
let i = 0;
while (i < ratings.length) {
  console.log(ratings[i]);
  i++;
}

// DO-WHILE Loop
console.log("Movie Quotes:");
let quote = 0;
const quotes = ["I'll be back", "May the force be with you", "You talkin' to me?"];
do {
  console.log(quotes[quote]);
  quote++;
} while (quote < quotes.length);

// FOREACH Loop
console.log("Movie Awards:");
const awards = ["Oscar", "Golden Globe", "BAFTA"];
awards.forEach((award, index) => {
  console.log(`${index}: ${award}`);
});

// FOR-OF Loop
console.log("Movie Characters:");
const characters = ["John McClane", "Luke Skywalker", "Forrest Gump"];
for (const character of characters) {
  console.log(character);
}

// FOR-IN Loop
console.log("Movie Details:");
const movieDetails = { title: "The Matrix", director: "The Wachowskis", year: 1999 };
for (const key in movieDetails) {
  console.log(`${key}: ${movieDetails[key]}`);
}

// Break and Continue
console.log("Movie Seasons:");
for (let season = 1; season <= 10; season++) {
  if (season === 5) break;
  console.log(`Season ${season}`);
}

for (let episode = 1; episode <= 20; episode++) {
  if (episode === 10) continue;
  console.log(`Episode ${episode}`);
}
