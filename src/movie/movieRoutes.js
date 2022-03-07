// require express router
const { Router } = require("express");
const {  addMovie, listMovies } = require("./movieControllers");
// handle routes we want to create
const movieRouter = Router();

// post request using the movie path & addMovie controller
movieRouter.post("/movie", addMovie);

movieRouter.get("/movie", listMovies);

module.exports = movieRouter;