// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET Route
  // app.get("/", function(req, res) {
  //   db.Burgers.findAll({
  //   }).then(function(dbcb) {
  //     res.json(dbcb);
  //   });
  // });

  // POST Route
  app.post("/", function(req, res) {
    db.Burgers.create({
      text: req.body.text,
      eaten: req.body.eaten,
      myTime: req.body.myTime
    }).then(function(dbcb) {
      res.json(dbcb);
    });
  });

};

