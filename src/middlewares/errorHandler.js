module.exports = (err, req, res, next) => {
  console.log("Middleware errorHandler has triggered");
  res.status(err.statusCode || 500).json({
    code: err.code,
    message: err.message,
  });
};
