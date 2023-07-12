const functions = require('firebase-functions');
const express = require('express');
const rateLimit = require('express-rate-limit');

// Create and configure an ExpressJS app.
const app = express();

// Enable CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Apply rate limit to the app.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
});
app.use(limiter);

app.get('/', async (req, res) => {
    res.send('Hello from Firebase!');
});

// Expose
