const mongoose = require('mongoose');
require('dotenv').config();

MONGOOSE_URL_LOCAL= 'mongoose://localhost:27017/voting';
mongoURL='mongodb://localhost:27017/voting';

// Define the MongoDB connection URL
////const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
