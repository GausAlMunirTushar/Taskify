const jwt = require('jsonwebtoken');

module.exports =(req, res, next)=>{
    let token = req.headers['token'];
    jwt.verify(token, "secretKey1234567890", (err, decoded)=>{
        if(err){
            res.status(401).json({status: "unauthorized user"})
        }
        else{
            let email = decoded['data'];
            req.headers.email = email;
            next();
        }
    })
}