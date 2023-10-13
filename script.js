let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let totalMovies = allMovies.length;

    document.write(`<ul>`);
    for (let i = 0; i < totalMovies; i++) {
      let movie = allMovies[i];
      document.write(`<li>${movie.title} - Rating: ${movie.rating} - Watched: ${movie.haveWatched}</li>`);
    }
    document.write(`</ul>`);
    document.write(`<h3>Total Movies: ${totalMovies}</h3>`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let matchingMovies = allMovies.filter((movie) => movie.rating > rating);
    let totalMatchingMovies = matchingMovies.length;
  
    document.write(`<h2>Movies with rating higher than ${rating}:</h2>`);
    document.write(`<ul>`);
    for (let i = 0; i < totalMatchingMovies; i++) {
      let movie = matchingMovies[i];
      document.write(`<li>${movie.title} - Rating: ${movie.rating} - Watched: ${movie.haveWatched}</li>`);
    }
    document.write(`</ul>`);
    document.write(`<h3>Total Matching Movies: ${totalMatchingMovies}</h3>`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find((movie) => movie.title === title);
    movie.haveWatched = !movie.haveWatched;
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);