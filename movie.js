var axios = require("axios");

function Movie (userInput){
    this.getMovie = function (){
        axios.get(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=trilogy`)
        .then(function (response) {
            console.log(`${response.data.Title}`);
            console.log(`Year Released: ${response.data.Year}`);
            console.log("The imdb rating is: " + response.data.imdbRating);
            console.log("The Rotten Tomato rating is: " + response.data.Ratings[1].Value);
            console.log(`Year Released: ${response.data.Year}`);
            console.log(`Country: ${response.data.Country}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
        });
    }
}

module.exports = Movie;