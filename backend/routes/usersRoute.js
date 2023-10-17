const express = require('express');
const usersRoute = express.Router();
const {
    registration,
    login, 
    profileUpdate,
    profileDetails,
} = require('../controllers/usersController');
const auth = require('../middleware/auth');

// User Routes
usersRoute.post('/registration', registration);
usersRoute.post('/login', login);
usersRoute.post('/profileUpdate', auth, profileUpdate);
usersRoute.get('/profileDetails', auth, profileDetails)
module.exports = usersRoute;