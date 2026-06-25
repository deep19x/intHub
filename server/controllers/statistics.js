const Question = require('../models/question');
const userProgress = require('../models/userProgress');
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

const getStatsOnTopics = async(req,res) => {
    try {

        const questions = await Question.find({},'topic');
        const progress = await userProgress.find({
            user : req.user.userId
        }).populate('question','topic');

        const topicStats = {};

        questions.forEach((question) => {
            const topic = question.topic;

            if(!topicStats[topic]){
                topicStats[topic] = {
                    total : 0,
                    solved : 0,
                    attempted : 0
                };
            }

            topicStats[topic].total++;
        });

        progress.forEach((item) => {
            const topic = item.question.topic;

            topicStats[topic][item.status]++;
        });

        for(const topic in topicStats){
            const stats = topicStats[topic];

            stats.todo = stats.total - stats.attempted - stats.solved;

            stats.completionPercentage = Number(((stats.solved / stats.total) * 100).toFixed(2));
        }

        return res.status(200).json({topicStats});
    } catch (error) {
        return res.status(500).json({
            message : error.message
        });
    }
}

const getStatsOnDifficulty = async(req,res) => {
    try {
        const questions = await Question.find({},'difficulty');
        const progress = await UserProgress.find({
            user : req.user.userId
        }).populate('question','difficulty');

        const difficultyStats = {};

        questions.forEach((question) => {
            const difficulty = question.difficulty;
            if(!difficultyStats[difficulty]){
                difficultyStats[difficulty] = {
                    total : 0,
                    solved : 0,
                    attempted : 0
                }
            }

            difficultyStats[difficulty].total++;
        });

        progress.forEach((item) => {
            const difficulty = item.question.difficulty;

            difficultyStats[difficulty][item.status]++;
        });

        for (const difficulty in difficultyStats){
            const stats = difficultyStats[difficulty];

            stats.todo = stats.total - stats.attempted - stats.solved;

            stats.completionPercentage = Number(((stats.solved / stats.total) * 100).toFixed(2));
        }

        return res.status(200).json({difficultyStats});

    } catch (error) {
        return res.status(500).json({
            message : error.message
        });
    }
};

module.exports = {getStats,getStatsOnTopics,getStatsOnDifficulty};