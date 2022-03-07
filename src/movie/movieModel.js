const mongoose = require("mongoose");

// create mongoose schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actors: {
        type: Array,
    },
});

// build Movie model to store movie schema structure
const Movie = mongoose.model("Movie", movieSchema);

// export model
module.exports = Movie;