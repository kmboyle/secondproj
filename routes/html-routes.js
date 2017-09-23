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

    app.get("/questions/:uuid", function(req, res) {
        console.log(req.params.uuid);

        db.Question.findOne({
            where: {
                uuid: req.params.uuid
            },
            include: [db.Agent]
        }).then(function(dbQuestion) {
            console.log(dbQuestion.dataValues);
            res.render("Cities", dbQuestion.dataValues);
        });
    });

};