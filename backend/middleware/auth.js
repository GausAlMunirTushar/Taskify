const jwt = require('jsonwebtoken');

module.exports =(req, res, next)=>{
    let token = req.headers['token'];
    jwt.verify(token, "secretKey1234567890", (err, decoded)=>{
        if(err){
            console.log(token)
            res.status(401).json({status: "unauthorized user"})
        }
        else{
            let email = decoded['data'];
            console.log(email)
            req.headers.email = email;
            next();
        }
    })
}