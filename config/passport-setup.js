const passport = require('passport');

const SpotifyStrategy = require('passport-spotify').Strategy;
passport.use(
    new SpotifyStrategy(
        {
        clientID: "3dc3d1c022da436387b45bcf805279c0",
        clientSecret: 'dc406f5cea674fd4ab5b510ee4f303c2',
        callbackURL: 'http://127.0.0.1:3000/'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            console.log(profile);
        User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
            return done(err, user);
        });
        }
    )
);

console.log('Passport Setup Loaded!');