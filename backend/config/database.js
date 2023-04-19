const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.MONGO_URI)
const MONGO_URI = "mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/taks";

const options = {
    autoIndex: true,
};
mongoose.set('strictQuery', true)
// Database Connection
mongoose.connect(MONGO_URI, options)
    .then(()=>{console.log('Database Connected Successfully');})
    .catch((err)=>{console.log(err)});