var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');

var {addUser} = require('../database-mongo/index');

client_id='3dc3d1c022da436387b45bcf805279c0';
redirect_uri = 'http://127.0.0.1:3000/';

let app = express();

app.use(bodyParser.urlencoded({limit: '5mb', extended: true }))
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth', (req, res) => {
  var scope = 'user-read-private user-read-email user-top-read'; 
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      response_type: 'token'
    }));
});

app.post('/api/user', (req, res) => {
  console.log(req.body);
  addUser(req.body, () => res.status(200).end());
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

