const express = require('express');
const usersRoute = express.Router();
const {registration, login} = require('../controllers/usersController');

usersRoute.post('/registration', registration);
usersRoute.post('/login', login);



module.exports = usersRoute;