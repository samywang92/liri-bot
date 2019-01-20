//when saving npm installs to dependencies npm install blah -S to assign to dependancies 
//lets split everything and create classes for each major search 

require("dotenv").config();
var Spotify = require("./spotify.js");
var Movie = require("./movie.js");
var fs = require("fs");
var moment = require('moment');

init();

function init() {
    var userInput = process.argv.splice(3).join(" "); // array of inputs in the search
    var userChoice = process.argv[2];

    initLiri(userChoice, userInput);
}

function initLiri(input, input2) {
    if (input === "concert-this") {
        //will come back
        concert();
        exportTF(input2);
    } else if (input === "spotify-this-song") {
        var mySong = new Spotify(input2);
        mySong.getSong();
        exportTF(input2);
    } else if (input === "movie-this") {
        var myMovie = new Movie(input2);
        myMovie.getMovie();
        exportTF(input2);
    } else if (input === "do-what-it-says") {
        doit();
    } else {
        console.log("Did you mean siri?");
        exportTF(input2);
    }
}

function concert() {
    console.log("concert this later");
}

function doit() {
    var read;
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) console.err(err);
        read = data.split(",");
        initLiri(read[0], read[1]);
    });
}

function exportTF(uVal) {
    fs.appendFile("data.txt", `${process.argv[2]}, ${uVal}\n`, function (err) {
        if (err) console.err(err);
        console.log("Command exported to data.txt!");
    })
}


