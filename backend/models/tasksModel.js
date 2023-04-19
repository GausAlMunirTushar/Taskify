const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    status: {
        type: String,
    },
    email: {
        type: String,
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }
}, {versionKey: false});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;