const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    companies: [
        {
            type: String,
        }
    ],
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    },
    topic: {
        type: String,
        trim: true,
        required: true
    },
    constraints: {
        type: String,
        default: "",
    },
    leetcodeUrl: {
        type: String,
        required: true,
    },
    patterns: [
        {
            type: String,
        }
    ],
    estimatedTime: {
        type: Number, //minutes
        default: 30,
    },
    whatYouWillLearn: [{
        type: String,
    }],
    hints: {
        brute: [{
            type: String,
        }],
        better: [{
            type: String,
        }],
        optimal: [{
            type: String,
        }],
    },
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);