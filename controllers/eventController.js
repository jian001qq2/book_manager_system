const db = require("../models");

// Defining methods for the eventsController just for demo 
module.exports = {
    findAll: function (req, res) {
    db.Activity
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
    db.Activity
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
    db.Activity
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
    db.Activity
            .update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
    db.Activity
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}