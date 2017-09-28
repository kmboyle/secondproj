var db = require("../models");
var express = require('express');
var path = require("path");
var http = require('http');
var https = require('https');
var htmlparser = require('htmlparser2');
var url = require('url');

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

    app.put("/api/agent/:uuid", function(req, res) {
        db.Agent.update(
            req.body,
          {
            where: {
              username: req.cookies.value
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
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