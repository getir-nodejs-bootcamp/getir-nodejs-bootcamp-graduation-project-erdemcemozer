const recordService = require("../services/Records");

const findRecords = (req, res) => {
  // Our method for finding desired records
  const { minCount, maxCount } = req.body;
  recordService
    .findRecords(req.body)
    .then((records) => {
      if (!records) {
        // To check if the records are found
        res.status(404).json({
          code: "4",
          message: "No records found",
        });
      }

      const filteredRecords = records.filter((record) => {
        // To filter the records by the minCount and maxCount
        return record.counts >= minCount && record.counts <= maxCount;
      });

      res.status(200).json({
        // To send the filtered records
        code: "0",
        message: "Success",
        records: filteredRecords,
      });
    })
    .catch((err) => {
      // If something goes wrong in the mongoose query or in the server
      res.status(500).json({
        code: "5",
        message: "^Server Error^ " + err.message,
      });
    });
};

module.exports = {
  findRecords,
};
