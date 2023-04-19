const express = require('express');
const tasksRoute = express.Router();
const { 
    createTask,
    deleteTask,
    updateTaskStatus, 
    listTaskByStatus,
    taskStatusCount
} = require('../controllers/tasksController');

const auth = require('../middleware/auth');

// Task Routes
tasksRoute.post('/createTask', auth, createTask);
tasksRoute.delete('/deleteTask/:id', auth, deleteTask);
tasksRoute.get('/updateTaskStatus/:id/:status', auth, updateTaskStatus);
tasksRoute.get('/listTaskByStatus/:status', auth, listTaskByStatus);
tasksRoute.get('/taskStatusCount', auth, taskStatusCount);


module.exports = tasksRoute;