const express = require('express');
const router = express.Router();
const db = require('./../models');

router.post('/reflect/:id', function(request, response){
	console.log("post route hit");
	console.log(request.user);
	if(request.user) {
		db.UserData.findOne({
			where: {UserId: request.user.id, id: request.params.id}
		}).then(function(data){
			
			console.log("DATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");	
			console.log(data);	
			response.json(data);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;