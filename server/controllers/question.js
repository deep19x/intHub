const Question = require('../models/question');

const createQuestion = async(req,res) => {
    try {
        const { title, companies , difficulty , topic} = req.body;
        if(!title || !difficulty || !topic){
            return res.status(400).json({message:"Please enter required fields"});
        }

        const question = await Question.create({
            title,
            companies,
            difficulty,
            topic
        });

        return res.status(201).json({message: "Question created",question});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getQuestions = async (req,res) => {
    try {
        const questions = await Question.find({});

        return res.status(200).json({message : "All questions so far!",questions});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

const getQuestionById = async(req,res) => {
    try {
        const {id} = req.params;

        const question = await Question.findById(id);

        if(!question){
            return res.status(404).json({message : "Question not exist"});
        }

        return res.status(200).json({question});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

module.exports = {createQuestion,getQuestions,getQuestionById};