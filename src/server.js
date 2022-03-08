// run the connection file
require("./db/connection");
// require express 
const express = require("express");
// import movie router endpoints
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;

// express parse JSON request 
app.use(express.json());

// use movie router 
app.use(movieRouter);

// use user router 
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



