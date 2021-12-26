# Getir Node.js Bootcamp Graduation Project - Erdem Özer

Welcome to my humble project! This is a NodeJS web server created with Express framework.

If you want to build project in your local host, first clone the repo to your computer.

Then install packages with npm.

```bash
npm install
```
Now you can start the app with: 

```bash
npm start
```

You will see some logs in the console after a clean build, it should give the below logs, you are now started the web application.

```bash
Application is running on 3000
You are currently connected to your mongo database
```

## What did i used as frameworks and libraries ?

- express
- mongoose
- dotenv
- cors
- joi
- joi-date
- morgan
- http-status
- nodemon
- jest

## Application

After starting out app it connects to a MongoDB Cloud server with a connection string. This string kept on .env file, if you want to change the MongoDB or applicaion port you can change it in here. Then you can make a POST request with parameters on body. You should use the /records route. Below you can see required fields for body.

I used joi for validation of body. Which validates if the dates in the "YYYY-MM-DD" format, minCount and maxCount is number and they takes minimum zero.

## Endpoints

| Method                       | Description                                                     | Required Body Fields     |
| ---------------------------- | --------------------------------------------------------------- | ------------------------ |
| POST /records                | Returns records with wanted date and total count                | `startDate, endDate, minCount, maxCount ` |
