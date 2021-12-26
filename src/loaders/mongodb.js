const Mongoose = require("mongoose");

const db = Mongoose.connection; // To connect to the database

db.once("open", () => {
  console.log("You are currently connected to your mongo database");
});

const connectDB = async () => {
  const { MONGO_CONNECTION_STRING } = process.env;
  // Connection to mongo database, connection string comes from .env file
  await Mongoose.connect(`${MONGO_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
