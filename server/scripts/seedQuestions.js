require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/question');
const questions = require('../data/questions');
const UserProgress = require('../models/userProgress');
const connectDB = require('../config/dbConnect');

async function seed(){
    await connectDB();
    await Question.deleteMany();
    await UserProgress.deleteMany();
    await Question.insertMany(questions);

    console.log('Questions inserted.');
    process.exit();
}

seed();