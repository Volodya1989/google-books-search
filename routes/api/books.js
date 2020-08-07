const express = require('express');
const router = express.Router();
const booksControllers = require('../../controllers/booksControllers');

router.route("/")
  .get(booksControllers.findAll)
  module.exports = router;
