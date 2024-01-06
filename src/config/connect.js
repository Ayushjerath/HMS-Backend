require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config.js');
const fs = require('fs');
const path = require('path');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.mongoURI, config.options);
        console.log(`Connected to MongoDB in ${process.env.NODE_ENV} environment`);

        // Load all model files from the 'models' folder
        const modelsPath = path.join(__dirname, '../models');
        const modelFiles = fs.readdirSync(modelsPath);

        modelFiles.forEach((file) => {
            if (file.endsWith('.js')) {
                const model = require(path.join(modelsPath, file));
                
                // Check if the model has a 'createCollection' method
                if (model.createCollection && typeof model.createCollection === 'function') {
                    model.createCollection().then(function (collection) {
                        console.log(`Collection for ${file} is created!`);
                    });
                } else {
                    console.log(`Skipping ${file} as it does not have a 'createCollection' method.`);
                }
            }
        });
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
