const mongoose = require('mongoose');

const judgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Judge', judgeSchema);
