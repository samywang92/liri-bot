//when saving npm installs to dependencies npm install blah -S to assign to dependancies 
// lets split everything and create classes for each major search 
// include the js files
// construct it here

require("dotenv").config();

//var request = require('request');
var Spotify = require("./spotify.js")
var Movie = require("./movie.js")
var moment = require('moment');

var userInput = process.argv.splice(3).join(" "); // array of inputs in the search

if (process.argv[2] === "concert-this") {
    //will come back
    concert();
} else if (process.argv[2] === "spotify-this-song") {
    var mySong = new Spotify(userInput);
    mySong.getSong();
} else if (process.argv[2] === "movie-this") {
    var myMovie = new Movie(userInput);
    myMovie.getMovie();
} else if (process.argv[2] === "do-what-it-says") {
    doit();
} else {
    console.log("Did you mean siri?")
}


function concert() {
    console.log("concert this later");
}

function doit() {

}


