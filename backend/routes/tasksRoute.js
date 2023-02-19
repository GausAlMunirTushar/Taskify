const express = require('express');
const tasksRoute = express.Router();

tasksRoute.get('/', (req, res) => {
    res.send('Hello from Tasks Route')
});

module.exports = tasksRoute;