const db = require("../models");
module.exports = {
  findAll: (req, res) => {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => console.log(err));
  },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbBook => res.json(dbBook))
//       .catch((err) => console.log(err));
//   },
};
