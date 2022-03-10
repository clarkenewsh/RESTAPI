const Movie = require("./movieModel");

// movie controller 
exports.addMovie = async (req, res) => {
    try {
        // create new movie using the body req 
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie});
    } catch (error) {
        console.log(error)
        // display error to user 
        res.status(500).send({err: error.message});
    }
};

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({allMovie: movies});
    } catch (error) {
        console.log(error);
        // display error to user 
        res.status(500).send({err: error.message});
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const updateMovie = await Movie.updateOne(
            {_id: req.params.id}, req.body);
            // res.status(200).send({msg: "Successfully updated movie"});
            if (updateMovie.modifiedCount > 0) {
                res.status(200).send({msg : "Successfully updated movie"})
            } else {
                throw new Error("Did not update");
            }
    } catch (error) {
        console.log(error);
        // display error to user 
        res.status(500).send({err: error.message});
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const deleteMovie = await Movie.deleteOne({_id: req.params.id});
        res.status(200).send();
    } catch(error) {
        console.log(error);
        // display error to user 
        res.status(500).send({err: error.message});
    }
};

