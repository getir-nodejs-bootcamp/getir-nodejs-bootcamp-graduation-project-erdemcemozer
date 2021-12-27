# Getir Node.js Bootcamp Graduation Project - Erdem Özer

Welcome to my humble project! This is a NodeJS web server created with Express framework.

If you want to see the app running on Heroku you can acces it [from here](https://erdem-ozer-getir-project.herokuapp.com/).

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

For testing on your local machine just run:

```bash
npm test
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

I used JOI for validation of body. Which validates if the dates in the "YYYY-MM-DD" format, minCount and maxCount is number and they takes minimum zero.

## Endpoint

| Method                       | Description                                                     | Required Body Fields     |
| ---------------------------- | --------------------------------------------------------------- | ------------------------ |
| POST /records                | Returns records with wanted date and total count                | `startDate, endDate, minCount, maxCount ` |

You can make this request with postman, after you started the app on your computer or you can use the server on Heroku.

```bash
https://erdem-ozer-getir-project.herokuapp.com/
```

So in the postman you should open a POST request and put localhost if you want to use the server on your computer.

```bash
http://localhost:3000/records
```

Or you can use the link from Heroku like below.

```bash
https://erdem-ozer-getir-project.herokuapp.com/records
```
After this you need to open a raw JSON body and put the required fields in it, here is an example of it.

```bash
{
    "startDate": "2010-01-26",
    "endDate": "2015-01-08",
    "minCount": 1,
    "maxCount": 25
}
```
This request will give you the records which total count is between 1-25 and crateDate between startDate-endDate.
