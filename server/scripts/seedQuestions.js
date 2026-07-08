require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/question');
const questions = require('../data/questions');
const UserProgress = require('../models/userProgress');
const connectDB = require('../config/dbConnect');

async function seed(){
    try {
        await connectDB();

        await Question.deleteMany({});
        await UserProgress.deleteMany({});

        await Question.insertMany(questions);

        console.log("Questions inserted successfully!");

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seed();