const express = require("express");

const recordsController = require("../controllers/Records");
const recordSchemas = require("../validations/Records");
const validate = require("../middlewares/validate");

const router = express.Router();

router
  .route("/")
  .post(
    validate(recordSchemas.validateFindRecords, "body"),
    recordsController.findRecords
  );

module.exports = router;
