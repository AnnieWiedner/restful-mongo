var express = require('express'); // INSTALL
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var Song = require('../models/Song.js');

// this connects our database to our app
require('./models/db');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');  // INSTALL

// What does this do that the get below doesnt?
// app.get('/', function(request, response) {
//   Song.find(function(err, songs) {
//     var allSongs = {songs: songs}
//     console.log(allSongs);
//     response.render("home", allSongs);
//   })
// })

app.get('/songs', function(request, response) {
  // find is a Mongoose query method
  Song.find(function (err, songs) {
    console.log(songs);
    response.json(songs);
  })
})


app.post('/songs', function(request, response) {
  var song = new Song ({name: request.body.name,
                        artist: request.body.artist,
                        length: request.body.length,
                        touring: request.body.touring})
  song.save();
  response.send("success")
})


app.patch('songs/:id', function(request, response) {
  var id = request.params.id;
  song.findById(id, function (err, wine) {
    song.name = request.body.name;
    song.artist = request.body.artist;
    song.length = request.body.length;
    song.touring = request.body.touring;
    song.save();
    response.json(song);
  })
})


app.delete('/songs/:id', function(request, response) {
  var id = request.params.id;
  // findById is a Mongoose query method
  Song.findById(id, function (err, song) {
    song.remove();
    response.json("success");
  })
})


server.listen(3000, function() {
  console.log("listening on port 3000")
})
