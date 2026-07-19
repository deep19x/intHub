const Question = require('../models/question');
const mongoose = require('mongoose');
const { createQuestionSchema } = require("../validators/questionValidator");

const createQuestion = async (req, res) => {
    try {

        const { error, value } = createQuestionSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }

        const question = await Question.create(value);

        return res.status(201).json({
            message: "Question created successfully",
            question,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getQuestions = async (req,res) => {
    try {
        const questions = await Question.find({});

        return res.status(200).json({questions});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

const getQuestionById = async(req,res) => {
    try {
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message : "Invalid question ID"
            });
        }

        const question = await Question.findById(id);

        if(!question){
            return res.status(404).json({message : "Question not found"});
        }

        return res.status(200).json({question});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

module.exports = {createQuestion,getQuestions,getQuestionById};