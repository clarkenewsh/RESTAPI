// require express router
const { Router } = require("express");
const {  addMovie, listMovies, updateMovie, deleteMovie } = require("./movieControllers");
// handle routes we want to create
const movieRouter = Router();

// post request using the movie path & addMovie controller
movieRouter.post("/movie", addMovie);

movieRouter.get("/movie", listMovies);

movieRouter.put("/movie/:id", updateMovie);

movieRouter.delete("/movie/:id", deleteMovie);

module.exports = movieRouter;