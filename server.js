const createError = ('http-errors');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const app = express();
var passport = require('passport');
var nodemon = require("nodemon");
var mysql2 = require("mysql2");
var bcrypt = require("bcrypt");
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session      = require('express-session');
var db = require("./models");

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

//API routes
const indexRouter = require("./routes/index");
const addUserRouter = require("./routes/addUser");
const loginRouter = require("./routes/login");
const grabpostRouter = require("./routes/grabPosts");
const submitRouter = require("./routes/submit");
const authUserRouter = require("./routes/authuser");

//view engine setup
// app.set('views', path.join(_dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: "very very secret",
  resave: true,
  name: "coffee",
  proxy: true,
  saveUninitialized: true
}));

// passport initialize and serialize
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  db.Users.findById(id).then(function(user){
    console.log(user);
    if(user){
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  })
})

// app.use('/', express.static('client/build'));
app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', loginRouter);
app.use('/', grabpostRouter);
app.use('/', submitRouter);
app.use('/', authUserRouter);

//setup passport log in authentication
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
  function(username, password, done) {
    db.Users.findOne({ 
      where:{ email: username }
      }).then(function(user){
        if (user == null) {
          return done(null, false, {message: 'Incorrect credentials'})
        }
        bcrypt.compare(password, user.password, function(err, res){
          if(res) {
              done(null, user)
          } else {
              done(null, false, { message: 'Incorrect password.' })
          }
      });
    })
   }
)) 

// sync with database
db.sequelize.sync().then(function(){
	app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})

module.exports = app;
