var db = require("../models");
var path = require("path");

module.exports = function(app) {
    app.get("/api/agent/:id", function(req, res) {
        db.Agent.findOne({
            where:{
                username: req.params.username
            }
        }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
        });
    });

    app.put("/api/agent", function(req, res) {
        db.Agent.update(
          req.body,
          {
            where: {
              username: req.body.username
            }
          }).then(function(dbAgent) {
            res.sendFile(path.join(__dirname, "../public/neutral.html"));  
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

    app.post("/api/agent", function(req, res) {
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