var db = require("../models");

module.exports = function(app) {
    app.get("/api/agent/", function(req, res) {
        db.Agent.findOne({
            where:{
                username: req.username,
                password: req.password
            }
        }).then(function(dbAgent) {
            res.cookie(req.username, 'cookie_value');
            res.json(dbAgent);
            res.sendFile(path.join(__dirname, "../public/neutral.html"));
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
            res.cookie(req.username , 'cookie_value');
            res.json(dbAgent);
          });
      });

    app.post("/api/agent", function(req, res) {
        db.Agent.create(req.body).then(function(dbAgent) {
            res.cookie(req.body.username , 'cookie_value');
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