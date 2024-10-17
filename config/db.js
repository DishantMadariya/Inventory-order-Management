const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const connectDB = mongoose.connection;
connectDB.once('open', function (err) {
    if (err) {
        console.log("something went wrong");
    }
    console.log("Database is connected");
});

// Export `connectDB` directly, not as an object
module.exports = connectDB;
