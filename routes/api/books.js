const express = require("express");
const router = express.Router();
const booksControllers = require("../../controllers/booksControllers");

router
  .route("/")
  .get(booksControllers.findAll)

//   .post(booksController.create);

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);



module.exports = router;
