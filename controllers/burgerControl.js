var express = require("express");
var router = express.Router();

var burgerData = require("../models/burger.js");
var db = require("../models");

// router.get('/', function(req, res){
	// burgerData.findAll(function(data){
	// 	var hbsObject = {
	// 		burger: data
	// 	};
	// 	console.log(hbsObject);
	// 	res.render("index", hbsObject);
	// });
// });


    // GET Route
  router.get("/", function(req, res) {
    db.Burgers.findAll({
    }).then(function(dbcb) {
      var hbsObject = {
        burger: dbcb
      };
      res.render("index", hbsObject);
    });
  });


// router.post('/', function(req, res){
// 	burgerData.create([
// 		"name", "eaten"
// 		], 
// 		[
// 		req.body.name, req.body.eaten
// 		], function() {
// 		   res.redirect("/");
// 		  });

// });


  router.post("/", function(req, res) {
    db.Burgers.create({
      text: req.body.text,
      eaten: req.body.eaten,
    }).then(function(dbcb) {
      res.json(dbcb);
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


