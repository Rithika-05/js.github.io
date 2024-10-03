function createMovieRatingCounter() {
    let ratingCount = 0;
  
    return {
      addRating: function() {
        ratingCount++;
        return `Rated ${ratingCount} times`;
      },
      removeRating: function() {
        if (ratingCount > 0) {
          ratingCount--;
          return `Unrated ${ratingCount + 1} times`;
        } else {
          return `No ratings`;
        }
      },
      getRatingCount: function() {
        return `Total ratings: ${ratingCount}`;
      }
    };
  }
  
  const movieRatings = createMovieRatingCounter();
  
  console.log(movieRatings.addRating()); 
  console.log(movieRatings.addRating()); 
  console.log(movieRatings.getRatingCount()); 
  console.log(movieRatings.removeRating()); 
  console.log(movieRatings.getRatingCount()); 