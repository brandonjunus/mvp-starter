var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const passport = require('passport');
const passportSetup = require(__dirname + '/../config/passport-setup.js');

client_id='3dc3d1c022da436387b45bcf805279c0';
redirect_uri = 'http://127.0.0.1:3000/';

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/spotify', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/auth', function(req, res) {

  var scope = 'user-read-private user-read-email user-top-read'; 

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      response_type: 'token'
    }));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

