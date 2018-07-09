//post req for auth user 
//check if logged in 
const express = require('express');
const router = express.Router();
const db = require('./../models');

// checks if a user is logged in. If so, grab all the searches associated with that user.
router.post('/authuser', function(request, response){
	if(request.user) {
		db.UserData.findAll({
			where: {userId: request.user.id},
			order: [['updatedAt', 'DESC']]
		}).then(function(data){
			response.json(request.user.id);
			console.log("---------------backend logged in------------");
			console.log("idddddd");
			console.log(request.user.id);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;