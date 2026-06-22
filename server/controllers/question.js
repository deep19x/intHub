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

module.exports = {createQuestion};