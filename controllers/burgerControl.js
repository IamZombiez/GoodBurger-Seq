var express = require("express");
var router = express.Router();

var burgerData = require("../models/burger.js");

router.get('/', function(req, res){
	burgerData.all(function(data){
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post('/', function(req, res){
	burgerData.create([
		"name", "eaten"
		], 
		[
		req.body.name, req.body.eaten
		], function() {
		   res.redirect("/");
		  });

});


router.put("/:ID", function(req, res) {
  var condition = "ID = " + req.params.ID;

  console.log("condition", condition);

  burgerData.update({
    eaten: req.body.eaten
  }, 
  condition, function() {
  res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burgerData.delete(condition, function() {
//     res.redirect("/");
//   });
// });


module.exports = router;


