const db = require("../models");
module.exports = {
  findAll: (req, res) => {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
  update: (req, res) => {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((dbBook) => dbBook.remove())
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
};
