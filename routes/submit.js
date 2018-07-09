//SUBMIT ENTRY 
const express = require('express');
// const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
// const cors = require('cors')
const router = express.Router();
const db = require('./../models');
const app = express();

// app.use(cors());
// checks if a user is logged in. If logged in, allow to submit post 
router.post('/submit', function(request, response){
	console.log("post route hit");
	console.log(request.user)
	if(request.user) { //user is keyword
		db.UserData.create({
			UserId: request.user.id,
            title: request.body.title,
            entry: request.body.entry,
            image: request.body.image
		}).then(function(data){
			response.json(data);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;