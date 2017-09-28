// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads view.html
    

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/questions/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/neutral.html"));
    });

    app.get("/9a5d03d6-6e04-49df-aaa3-0d1313b13676", function(req, res) {
        //berlin
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });
    
      // cms route loads cms.html
      app.get("/c24f71c6-90fb-4d81-b271-432cbe161b17", function(req, res) {
          //istanbul
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });
    
      // blog route loads blog.html
      //app.get("/", function(req, res) {
          //london
        //res.sendFile(path.join(__dirname, "../public/london.html"));
      //});
    
      
      app.get("/921f0551-354a-4758-8823-33edac508687", function(req, res) {
          //moscow
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });
    
      app.get("/2758a3a3-b741-4f7b-bc46-0b3b79d2b793", function(req, res) {
          //prague
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });
    
      app.get("/1feeacc3-b0e4-40dc-ad38-908aa14e1db4", function(req, res) {
          //rome
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });
    
      app.get("/163318ea-5835-46b8-8b19-7c69807b1263", function(req, res) {
          //warsaw
        res.sendFile(path.join(__dirname, "../public/neutral.html"));
      });

    app.get("/questions/:uuid", function(req, res) {
        console.log(req.params.uuid);

        db.Question.findOne({
            where: {
                uuid: req.params.uuid
            },
            include: [db.Agent]
        }).then(function(dbQuestion) {
            dbQuestion.dataValues.question = dbQuestion.dataValues.question.replace(/&quot;/g, '"');
            res.render("Cities", dbQuestion.dataValues);
        });
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};