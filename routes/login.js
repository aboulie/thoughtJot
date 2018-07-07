// post route to login 
//** note: a sget req would not be secure
//this is the authentication for the login form 

const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

const app = express();

// this is the authentication for the login form
router.post('/login',
passport.authenticate('local', { successRedirect: 'http://localhost:3000/entry',
                                failureRedirect: 'http://localhost:3000/?invalid=true'
                                })
);

router.post('/logout', function(req, res){
  req.logout();  //logout is a function of passport
  res.redirect('/'); //once logged out: hit / route 
});

module.exports = router;