const db = require("../models");
module.exports = {
 
    findAll: function(req, res) {
    db.user
        .findAll()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
     db.user
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
     db.user
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
     db.user
        .update(req.body,{where:{ id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
     db.user
      .destroy({where:{id:req.params.id} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  }