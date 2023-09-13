const mongoose = require("mongoose");

async function connectDB() {
    mongoose.connect("mongodb://0.0.0.0:27017/urlShortApp")
        .then(() => console.log("mongoDb is connected"))
        .catch((e) => console.log(e.message))
}

module.exports = connectDB;