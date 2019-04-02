let db = require('../models');

module.exports = function(app) {
  app.get("/api/keys", function(req, res) {
    db.Key.findAll({
    
    }).then(function(dbKey) {
      res.json(dbKey);
    });
  });

};
