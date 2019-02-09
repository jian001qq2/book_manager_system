const db = require("../models");
 
// Defining methods for the eventsController just for demo 
module.exports = {
  findAll: function(req, res) {
  db.event
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
   db.event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
   db.event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
   db.event
      .update(req.body,{where:{ id: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
   db.event
    .destroy({where:{id:req.params.id} })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
}