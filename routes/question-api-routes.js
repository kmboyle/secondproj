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

    var Client = require('node-rest-client').Client;

    var client = new Client();

    var questionArray = {
        question: [],
        correct_answer: []
    }

    // function questionBuilder() {
    //     // direct way 
    //     client.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean", function(data, response) {
    //         // parsed response body as js object 
    //         // raw response 
    //         data.results.forEach(function(element) {

    //             db.Question.create({
    //                 question: element.question,
    //                 correct_answer: element.correct_answer
    //             });
    //         });
    //     });
    // }
    app.route("/api/questions/").post(function(req, res) {
        var uuid;
        var city = ["London", "Berlin", "Moscow", "Prague", "Moscow", "Rome", "Istanbul", "Warsaw"];
        var rand;
        var qrURL;
        for (var i = 0; i < req.body.question.length; i++) {
            rand = Math.floor((Math.random() * 8));
            uuid = uuidv4();

            db.Question.create({
                question: req.body.question[i],
                correct_answer: req.body.correct_answer[i]

            });
            db.city.create({
                uuid: uuid,
                name: city[rand],

            });

        }
        console.log(req.body);
        db.agent.create({
            username: req.params.email
        })
    })

    //         //url for deployed app testing
    //         //data=https://cryptic-ridge-88864.herokuapp.com/api/questions/"

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
    // app.post("/api/city", function(req, res) {
    //     var uuid;
    //     var city = ["London", "Berlin", "Moscow", "Prague", "Moscow", "Rome", "Istanbul", "Warsaw"];
    //     var rand;
    //     var qrURL;
    //     for (var i = 0; i < req.body.question.length; i++) {
    //         rand = Math.floor((Math.random() * 8));
    //         uuid = uuidv4();
    //         //url for deployed app testing
    //         //data=https://cryptic-ridge-88864.herokuapp.com/api/questions/"

    //         db.city.create({
    //             uuid: uuid,
    //             name: city[rand],

    //         })
    //     }
    // });



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
    app.put("/api/urlVisit", function(req, res) {
        console.log(req.body);
        db.Question.update({
            visited: req.body.visit
        }, {
            where: {
                city: req.body.cityName
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