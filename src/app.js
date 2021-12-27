const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { RecordsRoutes } = require("./routes");

const errorHandler = require("./middlewares/errorHandler");
const config = require("./config");
const loaders = require("./loaders");

config(); // Setting up the config for dotenv
loaders(); // Connection to mongo

const app = express();

app.use(express.json()); // To parse the json data
app.use(morgan("combined")); // To log the requests
app.use(
  cors({
    methods: "*",
    origin: "*",
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Application is running on ${process.env.PORT}`);
  app.use("/records", RecordsRoutes);

  app.use((req, res, next) => {
    const error = new Error("Could not find this endpoint or route");
    error.code = 6;
    next(error);
  });

  app.use(errorHandler);
});

module.exports = {
  app,
};
