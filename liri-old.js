//when saving npm installs to dependencies npm install blah -S to assign to dependancies 
// lets split everything and create classes for each major search 
// include the js files
// construct it here

require("dotenv").config();
var keys = require('./key.js');
var Spotify = require('node-spotify-api');
//var request = require('request');
var axios = require("axios");
var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var userInput = process.argv.splice(3).join(" "); // array of inputs in the search

if (process.argv[2] === "concert-this") {
    //will come back
    concert();
} else if (process.argv[2] === "spotify-this-song") {
    song();
} else if (process.argv[2] === "movie-this") {
    movie();
} else if (process.argv[2] === "do-what-it-says") {
    doit();
} else {
    console.log("Did you mean siri?")
}

function song() {
    if (userInput === undefined || userInput.length == 0) {
        console.log("came in here");
        spotify.search({ type: 'track', query: 'The Sign', limit: 10 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(`Track: ${data.tracks.items[9].name}`);
            console.log(`Artist: ${data.tracks.items[9].artists[0].name}`);
            console.log(`Link: ${data.tracks.items[9].href}`);
            console.log(`Album: ${data.tracks.items[9].album.name}`);
        });
    } else {
        spotify.search({ type: 'track', query: userInput }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(`Track: ${data.tracks.items[0].name}`);
            for (var i in data.tracks.items[0].artists) {
                console.log(`Artist: ${data.tracks.items[0].artists[i].name}`);
            }
            console.log(`Link: ${data.tracks.items[0].href}`);
            console.log(`Album: ${data.tracks.items[0].album.name}`);
        });
    }
}

function movie() {
    axios.get(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=trilogy`)
        .then(function (response) {
            //console.log(response);
            console.log("The movie's rating is: " + response.data.imdbRating);
        });

}

function concert() {
    console.log("concert this later");
}

function doit() {
    //console.log("came in here");
    // spotify.search({ type: 'track', query: 'The Sign' , limit: 10}, function(err, data) {
    //     if (err) {
    //       return console.log('Error occurred: ' + err);
    //     }

    //   console.log(data); 
    //   //clconsole.log(data.tracks.items[0]);
    //   console.log(`Track: ${data.tracks.items[9].name}`);
    //   console.log(`Artist: ${data.tracks.items[9].artists[0].name}`);
    //   console.log(`Link: ${data.tracks.items[9].href}`);
    //   console.log(`Album: ${data.tracks.items[9].album.name}`);
    //   });

}


