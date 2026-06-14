const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Database not connected:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;