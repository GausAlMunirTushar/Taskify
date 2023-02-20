const express = require('express');
const tasksRoute = express.Router();
const { 
    createTask,
    deleteTask,
    updateTaskStatus 
} = require('../controllers/tasksController');
const auth = require('../middleware/auth');

// Task Routes
tasksRoute.post('/createTask', auth, createTask);
tasksRoute.delete('/deleteTask/:id', auth, deleteTask);
tasksRoute.put('/updateTaskStatus/:id', auth, updateTaskStatus);



module.exports = tasksRoute;