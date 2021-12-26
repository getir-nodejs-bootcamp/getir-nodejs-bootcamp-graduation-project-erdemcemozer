const httpStatus = require("http-status");

const validate = (schema, source) => (req, res, next) => {
  // To validate the request body we take schema and source
  const { value, error } = schema.validate(req[source]);

  if (error) {
    const errorMessage = error?.details
      ?.map((detail) => detail?.message)
      .join(", ");
    return res.status(httpStatus.BAD_REQUEST).send({ error: errorMessage });
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
