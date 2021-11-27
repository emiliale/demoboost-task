# demoboost-task
 
## Table of contents
* [General info](#general-info)
* [Deployment](#deployment)
* [Setup](#setup)


## General info
This project is a simple web app, which allows you to capture web pages and render them. The application was written using Typescript, with React and Express frameworks.

## Deployment
* https://demoboost-task.herokuapp.com/ (client)
* https://demoboost-task-server.herokuapp.com/ (server)

## Setup
To start the application in the development environment, first configure the connection to the database.

You can use the database from production, to do it comment this code in database.ts:
```
// if(!process.env.DB_ENVIROMENT){
//     database = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "demoboosttask",
//     })
// }
```
Or create your own database locally:
```
mysql -u [username] -p 
[password]
CREATE DATABSE demoboosttask;
USE demoboosttask;
CREATE TABLE webpages (name VARCHAR(255), address VARCHAR(255));
```
Remeber to check if information about user and password in database.ts file are correct.
```
    database = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "demoboosttask",
    })
```
After configuring the database, start the application with the following commands:

1. npm i
2. cd client
3. npm i
4. cd ..
5. npm run dev
