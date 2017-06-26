var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  artist: String,
  length: Number,
  touring: Boolean
})

// tells Mongoose to create a model
var songModel = mongoose.model('Song', SongSchema);

//exports our model so we can use in our node app
module.exports = songModel;
