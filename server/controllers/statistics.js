const Question = require('../models/question');
const UserProgress = require('../models/userProgress');

const getStats = async(req,res) => {
    try {
        const userId = req.user.userId;

        const totalQuestions = await Question.countDocuments({});

        const solvedQuestions = await UserProgress.countDocuments({
            user:userId,
            status:'solved'
        });

        const attemptedQuestions = await UserProgress.countDocuments({
            user:userId,
            status:'attempted'
        });

        const todo = totalQuestions - solvedQuestions - attemptedQuestions;

        const completionPercentage = (totalQuestions === 0) ? 0 : Number(((solvedQuestions / totalQuestions)*100).toFixed(2));

        res.status(200).json({
            totalQuestions,
            solvedQuestions,
            attemptedQuestions,
            todo,
            completionPercentage
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getStats};