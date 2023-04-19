const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./config/database');
const usersRoute = require('./routes/usersRoute');
const tasksRoute = require('./routes/tasksRoute');

const app = express();

// Security Middleware Import
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Security Middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());

// Body Parser Implementation
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Body Parser Implement
app.use(bodyParser.json())

// Rate Limiter Implementation
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Routing Implmentation
app.use('/api/v1', tasksRoute);
app.use('/api/v1', usersRoute);

// Undefined Routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});


module.exports = app;