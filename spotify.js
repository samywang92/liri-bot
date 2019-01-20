var keys = require('./key.js');
var SpotifyAPI = require('node-spotify-api');
var spotify = new SpotifyAPI(keys.spotify);

function Spotify(userInput) {
    this.getSong = function () {
        if (userInput === undefined || userInput.length == 0) {
            spotify.search({ type: 'track', query: 'The Sign', limit: 10 }, function (err, data) {
                if (err) return console.log('Error occurred: ' + err);
                
                console.log(`Track: ${data.tracks.items[9].name}`);
                console.log(`Artist: ${data.tracks.items[9].artists[0].name}`);
                console.log(`Link: ${data.tracks.items[9].href}`);
                console.log(`Album: ${data.tracks.items[9].album.name}`);
            });
        } else {
            spotify.search({ type: 'track', query: userInput }, function (err, data) {
                if (err) return console.log('Error occurred: ' + err);

                console.log(`Track: ${data.tracks.items[0].name}`);
                for (var i in data.tracks.items[0].artists) {
                    console.log(`Artist: ${data.tracks.items[0].artists[i].name}`);
                }
                console.log(`Link: ${data.tracks.items[0].href}`);
                console.log(`Album: ${data.tracks.items[0].album.name}`);
            });
        }
    }
}

module.exports = Spotify;