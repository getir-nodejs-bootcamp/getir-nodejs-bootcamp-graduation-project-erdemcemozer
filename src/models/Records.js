const Mongoose = require("mongoose");

const RecordSchema = new Mongoose.Schema({
  // To create the schema for the records
  key: String,
  value: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  counts: [Number],
});

module.exports = Mongoose.model("record", RecordSchema);
