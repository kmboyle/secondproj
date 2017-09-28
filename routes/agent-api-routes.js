var db = require("../models");
var express = require('express');
var path = require("path");

module.exports = function(app) {

    app.get("/api/agent/:username", function(req, res) {
        db.Agent.findOne({
            where:{
                username: req.params
            }
        }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
        });
    });

    app.put("/api/agent/", function(req, res) {
        db.Agent.update(
            req.city.value,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            //res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

    app.post("/api/agent/", function(req, res) {
        db.Agent.create(req.body).then(function(dbAgent) {
            res.cookie("username", dbAgent.username);
            res.json(dbAgent);
        });
    });

    app.delete("/api/agent/:id", function(req, res) {
        db.Agent.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAgent) {
            res.json(dbAgent);
        });
    });

};