const recordsController = require("../controllers/Records");

test("findsRecords", () => {
  expect(recordsController.sum(2, 3)).toBe(5);
});
