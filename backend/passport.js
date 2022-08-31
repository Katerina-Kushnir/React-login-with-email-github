const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID = "522753054013-fb8g9ru84do0fpfmrget4cg9bdj7iovj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "b65b6858373439366740";
const GITHUB_CLIENT_SECRET = "213dcfde994274581cf333c114654b144fb36857";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback",
},
function (accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.serializeUser((user, done) => {
  done(null, user)
});
passport.deserializeUser((user, done) => {
  done(null, user)
});


