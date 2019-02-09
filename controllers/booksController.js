const db = require("../models");
 
module.exports = {
  findAll: function(req, res) {
   db.book
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
   db.book
      .findOne({where:{id:req.params.id}})
      .then(dbModel =>  res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
   db.book
      .create(req.body)
      .then(dbModel =>  res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
   db.book
      .update(req.body,{where:{id:req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
   db.book
      .destroy({where:{id:req.params.id} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

