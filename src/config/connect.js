require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config.js');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.mongoURI, config.options);
        console.log(`Connected to MongoDB in ${process.env.NODE_ENV} environment`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`);
    }
};

const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log(`Disconnected from MongoDB in ${process.env.NODE_ENV} environment`);
    } catch (error) {
        console.log(`Error disconnecting from MongoDB: ${error}`);
    }
};

module.exports = { connectToDatabase, disconnectFromDatabase };