var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hipsterfy');

var db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

var userSchema = mongoose.Schema({
  id: String,
  profile: String,
  topTracks: String,
  topArtists: String
});

var User = mongoose.model('User', userSchema);

const addUser = (body, callback) => {
  console.log('body', body.id);
  const userData = {
    id: body.id,
    profile: body.profile,
    topTracks: body.tracks,
    topArtists: body.artists,
  }
  let CurrentUser = new User(userData)


  User.findOneAndUpdate({id: body.id}, userData, {upsert: true}, (err, user) => {
    if (err) throw err;
    console.log('inserted user', user)
    callback()
  })
}

module.exports = {
  addUser: addUser
}
