const express = require("express");
const router = express.Router();
const booksControllers = require("../../controllers/booksControllers");
// goes with "/api/books"
router.route("/").get(booksControllers.findAll).post(booksControllers.create);

// goes with "/api/books/:id"
router
  .route("/:id")
  .get(booksControllers.findById)
  .put(booksControllers.update)
  .delete(booksControllers.remove);

module.exports = router;
