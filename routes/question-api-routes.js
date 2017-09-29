// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const uuidv4 = require("uuid/v4");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the questions
    app.get("/api/questions", function(req, res) {
        var query = {};
        db.Question.findAll({
            where: query,
            include: [db.Agent]
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });
    //still need to build out functionality to keep a users score
    //and also to track if they have visited all their questions 
    app.get("/api/checkAnswer", function(req, res) {
        console.log(req.body);
        var query = req.body.questionId;
        db.Question.findOne({
            where: query,
            include: [db.Agent]
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });

    // app.post("/api/checkAnswer", function(req, res, next) {
    //     console.log(req.body);
    //     var query = req.body.questionId;
    //     next(query);
    // }, function(req, res) {
    //     app.get("/api/questions", function(req, res) {
    //         db.Question.findOne({
    //             where: query,
    //             include: [db.Agent]
    //         }).then(function(dbQuestion) {
    //             res.json(dbQuestion);
    //         });

    //     })

    // });


    //question generator post
    app.post("/api/questions", function(req, res) {
        var uuid;
        var city = ["London", "Berlin", "Moscow", "Prague", "Moscow", "Rome", "Istanbul", "Warsaw"];
        var rand;
        var qrURL;
        var id = req.cookies.AgentId;
        for (var i = 0; i < req.body.question.length; i++) {
            rand = Math.floor((Math.random() * 8));
            uuid = uuidv4();
            //url for deployed app testing
            //data=https://cryptic-ridge-88864.herokuapp.com/api/questions/"

            db.Question.create({
                AgentId: id,
                uuid: uuid,
                city: city[rand],
                question: req.body.question[i],
                correct_answer: req.body.correct_answer[i]
            })
        }
    });



    // DELETE route for deleting mission
    app.delete("/api/questions/:id", function(req, res) {
        db.Question.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });

    // PUT route for updating Question on who has visited this city
    app.put("/api/updateVisit", function(req, res) {
        console.log(req.body);
        db.Question.update({
            visited: req.body.visit
        }, {
            where: {
                cityName: req.body.cityName
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });

    // PUT route for updating the visit of this specific uuid/question
    app.put("/api/updateQuestionVisit", function(req, res) {
        console.log(req.body);
        db.Question.update({
            questionVisit: req.body.questionVisit
        }, {
            where: {
                uuid: req.body.uuid
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });






};