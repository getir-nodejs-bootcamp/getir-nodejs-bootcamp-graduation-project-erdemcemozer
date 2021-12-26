const Record = require("../models/Records");

const findRecords = (where) => {
  // Our method for querying with desired parameters
  return Record.aggregate([
    {
      $match: {
        // To get the records between the start and end date
        createdAt: {
          $gte: new Date(where.startDate),
          $lte: new Date(where.endDate),
        },
      },
    },
    {
      $project: {
        // To get the records by wanted fields
        _id: 0,
        createdAt: 1,
        key: 1,
        counts: { $sum: "$counts" }, // To get the summed counts of the records
      },
    },
  ]);
};

module.exports = {
  findRecords,
};
