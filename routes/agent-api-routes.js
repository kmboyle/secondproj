var db = require("../models");
var express = require('express');
var path = require("path");

module.exports = function(app) {

    app.get("/api/agent/username", function(req, res) {
        db.Agent.findOne({
            where:{
                username: req.username,
                password: req.password
            }
        }).then(function(dbAgent) {
            res.cookie('AgentId',dbAgent.id);
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
        });
    });

    app.put("/api/agent/berlin", function(req, res) {
        db.Agent.update({
            berlin:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
        });

      app.put("/api/agent/istanbul", function(req, res) {
        db.Agent.update({
            istanbul:true
        },
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/moscow", function(req, res) {
        db.Agent.update({
            moscow:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/prague", function(req, res) {
        db.Agent.update({
            prague:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/rome", function(req, res) {
        db.Agent.update({
            rome:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/warsaw", function(req, res) {
        db.Agent.update({
            warsaw:true
        }
        ,
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
            res.cookie('AgentId',dbAgent.id);
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