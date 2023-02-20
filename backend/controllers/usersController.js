const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');

const registration = (req, res)=>{
    let reqBody = req.body;
    usersModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"failed", data: err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

const login = (req, res)=>{
    let reqBody = req.body;
    usersModel.aggregate([
        {$match: reqBody},
        {$project: {_id: 0, email: 1, firstName: 1, lastName: 1, mobileNumber: 1, photo: 1}}
    ], (err, data)=>{
        if(err){
            res.status(400).json({status:"failed", data: err})
        }
        else{
            if(data.length>0){
                let payload = {exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data[0]['email']}
                let token = jwt.sign(payload, 'secretKey1234567890');
                res.status(200).json({status:"success", token: token, data: data[0] })
            }
            else{
                res.status(400).json({status: "unauthorized user"})
            }
        }
    });
}

const profileUpdate = (req, res)=>{
    let email = req.headers.email;
    let reqBody = req.body;
    userModel.updateOne({email:email}, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"failed", data: err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

module.exports = {
    registration,
    login,
    profileUpdate 
};