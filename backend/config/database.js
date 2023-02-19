const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.MONGO_URI)
const MONGO_URI = "mongodb://localhost:27017/task-app";

const options = {
    autoIndex: true,
};
mongoose.set('strictQuery', true)
// Database Connection
mongoose.connect(MONGO_URI, options)
    .then(()=>{console.log('Database Connected Successfully');})
    .catch((err)=>{console.log(err)});