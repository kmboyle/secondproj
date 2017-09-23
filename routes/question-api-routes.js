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



    app.post("/api/questions", function(req, res) {
        var uuid;
        var city = ["London", "Berlin", "Moscow", "Prague", "Moscow", "Rome", "Istanbul", "Warsaw"];
        var rand;
        var qrURL;
        for (var i = 0; i < req.body.question.length; i++) {
            rand = Math.floor((Math.random() * 8));
            uuid = uuidv4();
            //url for deployed app testing
            //data=https://cryptic-ridge-88864.herokuapp.com/api/questions/"

            db.Question.create({
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

    // PUT route for updating Question
    app.put("/api/questions", function(req, res) {
        db.Question.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });
};