const mongoose = require('mongoose');
const UserProgress = require('../models/userProgress');
const Question = require('../models/question');


const updateProgress = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { status } = req.body;

        const solvedAt = status === 'solved' ? new Date() : null;

        if (!status || !['attempted', 'solved'].includes(status)) {
            return res.status(400).json({
                message: 'Invalid status'
            });
        }

        if (!mongoose.Types.ObjectId.isValid(questionId )) {
            return res.status(400).json({
                message: "Invalid question ID"
            });
        }

        const question = await Question.findById(questionId );

        if (!question) {
            return res.status(404).json({
                message: "Question not found"
            });
        }

        const existingProgress = await UserProgress.findOne({
            user: req.user.userId,
            question: questionId 
        });

        if (existingProgress) {
            existingProgress.status = status;
            existingProgress.solvedAt = solvedAt;

            await existingProgress.save();

            return res.status(200).json({
                userProgress: existingProgress
            });
        }

        const userProgress = await UserProgress.create({
            user: req.user.userId,
            question: questionId ,
            status,
            solvedAt
        });

        return res.status(201).json({ userProgress });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}