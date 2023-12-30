const express = require('express');
const { connectToDatabase, disconnectFromDatabase } = require('./src/config/connect.js');

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
app.listen(PORT, async() => {
    console.log(`Server listening on port ${PORT}`);
    try {
        await connectToDatabase();
    } catch (error) {
        console.log('Failed to connect to MongoDB. Exiting process...');
        process.exit(1);
    }
});


// Gracefully Disconnect from MongoDB on process termination
process.on('SIGINT', async() => {
    console.log('Recieved SIGINT: closing connection to MongoDB');
    try {
        await disconnectFromDatabase();
    } catch (error) {
        console.log('Failed to disconnect from MongoDB');
    }
    process.exit(0);
});