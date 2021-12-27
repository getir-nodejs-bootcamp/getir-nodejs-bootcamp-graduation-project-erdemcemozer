const Joi = require("joi").extend(require("@joi/date"));

const validateFindRecords = Joi.object({
  // Validation for findRecords
  startDate: Joi.date().required().format("YYYY-MM-DD"),
  endDate: Joi.date()
    .required()
    .format("YYYY-MM-DD")
    .less(new Date()) // To check if the endDate is less than today's date
    .greater(Joi.ref("startDate")), // To check if the endDate is greater than startDate
  minCount: Joi.number().required().min(0),
  maxCount: Joi.number().required().min(0),
});

module.exports = {
  validateFindRecords,
};
