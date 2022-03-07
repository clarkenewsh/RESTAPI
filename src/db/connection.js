require("dotenv").config();
const mongoose = require("mongoose");

// Set up mongoose db connection using the .env uri
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // test connection
        console.log("success");
    } catch (error) {
        console.log(error)
    }
}

connection();