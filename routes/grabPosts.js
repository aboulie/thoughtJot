const express = require('express');
const router = express.Router();
const db = require('./../models');

router.post('/grabposts/:id', function(request, response){
	console.log("post route hit");
	console.log(request.user);
	if(request.user) {
		console.log('************* grab post REQ USER ********')
		console.log(request.user);
		db.UserData.findOne({
			where: {userId: request.user.id, id: request.params.id}
		}).then(function(data){
			
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");	
			console.log(request.user);	
			response.json(request.user);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;