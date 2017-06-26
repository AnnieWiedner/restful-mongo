var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString);

// this would mean MongoDB is connected to database
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + connectionString);
});

// this would mean an error has occured with the database
mongoose.connection.on('error',function (error) {
  console.log('Mongoose connection error: ' + error);
});

//this would mean the connection to the server has been terminated
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected!');
});
