const tasksModel = require('../models/tasksModel');

const createTask = (req, res)=>{
    let reqBody = req.body;
    reqBody.email = req.headers['email'];
    tasksModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

const deleteTask = (req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    tasksModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

const updateTaskStatus = (req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let status = req.body.status;
    let reqBody = {status: status};
    tasksModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

const listTaskByStatus = (req, res)=>{
    let status = req.params.status;
    let email = req.headers['email'];
    tasksModel.aggregate([
        {$match: {status: status, email: email}},
        {$project: {
            _id: 1,
            title: 1,
            description: 1,
            status: 1, 
            createdDate :{
                $dateToString: {
                    date: "$createdDate",
                    format: '%d-%m-%Y'
                }
            }
        }}
    ], (err, data)=>{
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    });
}

const taskStatusCount = (req, res)=>{
    let email = req.headers['email'];
    tasksModel.aggregate([
        {$match: {email: email}},
        {$group: {_id:"$status", sum:{$count: {}}}},
    ],(err, data)=>{
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    });
}

module.exports = { 
    createTask,
    deleteTask,
    updateTaskStatus,
    listTaskByStatus,
    taskStatusCount
}