const Joi = require("joi").extend(require("@joi/date"));

const validateFindRecords = Joi.object({
  // Validation for findRecords
  startDate: Joi.date().required().format("YYYY-MM-DD"),
  endDate: Joi.date().required().format("YYYY-MM-DD"),
  minCount: Joi.number().required().min(0),
  maxCount: Joi.number().required().min(0),
});

module.exports = {
  validateFindRecords,
};
