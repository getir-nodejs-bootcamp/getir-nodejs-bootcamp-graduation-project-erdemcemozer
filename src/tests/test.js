const { app } = require("../app");

const requests = require("supertest");
const mongoose = require("mongoose");

require("dotenv").config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

test("findRecords with right data", async () => {
  await requests(app)
    .post("/records")
    .send({
      startDate: "2010-01-26",
      endDate: "2015-01-08",
      minCount: 1,
      maxCount: 25,
    })
    .then((res) => {
      expect(res.statusCode).toBe(200);
    });
});

test("findRecords with endDate less than startDate", async () => {
  await requests(app)
    .post("/records")
    .send({
      startDate: "2016-01-26",
      endDate: "2015-01-08",
      minCount: 1,
      maxCount: 25,
    })
    .then((res) => {
      expect(res.statusCode).toBe(400);
    });
});

test("findRecords with endDate greater than todays date", async () => {
  await requests(app)
    .post("/records")
    .send({
      startDate: "2016-01-26",
      endDate: "2023-01-08",
      minCount: 1,
      maxCount: 25,
    })
    .then((res) => {
      expect(res.statusCode).toBe(400);
    });
});

test("findRecords with missing parameter on body", async () => {
  await requests(app)
    .post("/records")
    .send({
      startDate: "2016-01-26",
      minCount: 1,
    })
    .then((res) => {
      expect(res.statusCode).toBe(400);
    });
});

test("findRecords with invalid date format", async () => {
  await requests(app)
    .post("/records")
    .send({
      startDate: "20-01-2016",
      endDate: "2019-01-08",
      minCount: 1,
      maxCount: 25,
    })
    .then((res) => {
      expect(res.statusCode).toBe(400);
    });
});
