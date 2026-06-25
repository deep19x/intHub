const Question = require('../models/question');
const UserProgress = require('../models/userProgress');

const getOverallStats = async (userId) => {
    const total = await Question.countDocuments({});
    const solved = await UserProgress.countDocuments({
        user: userId,
        status: 'solved'
    });
    const attempted = await UserProgress.countDocuments({
        user: userId,
        status: 'attempted'
    });
    const todo = total - solved - attempted;
    const completionPercentage = Number(((solved / total) * 100).toFixed(2));

    return {
        total,
        solved,
        attempted,
        todo,
        completionPercentage
    }
}

const getTopicStats = async (userId) => {
    const questions = await Question.find({}, 'topic');
    const progress = await UserProgress.find({
        user: userId
    }).populate('question', 'topic');

    const topicStats = {};

    questions.forEach((question) => {
        const topic = question.topic;

        if (!topicStats[topic]) {
            topicStats[topic] = {
                total: 0,
                solved: 0,
                attempted: 0
            };
        }

        topicStats[topic].total++;
    });

    progress.forEach((item) => {
        const topic = item.question.topic;

        topicStats[topic][item.status]++;
    });

    for (const topic in topicStats) {
        const stats = topicStats[topic];

        stats.todo = stats.total - stats.attempted - stats.solved;

        stats.completionPercentage = Number(((stats.solved / stats.total) * 100).toFixed(2));
    }

    return topicStats;
}

const getDifficultyStats = async (userId) => {
    const questions = await Question.find({}, 'difficulty');
    const progress = await UserProgress.find({
        user: userId
    }).populate('question', 'difficulty');

    const difficultyStats = {};

    questions.forEach((question) => {
        const difficulty = question.difficulty;
        if (!difficultyStats[difficulty]) {
            difficultyStats[difficulty] = {
                total: 0,
                solved: 0,
                attempted: 0
            }
        }

        difficultyStats[difficulty].total++;
    });

    progress.forEach((item) => {
        const difficulty = item.question.difficulty;

        difficultyStats[difficulty][item.status]++;
    });

    for (const difficulty in difficultyStats) {
        const stats = difficultyStats[difficulty];

        stats.todo = stats.total - stats.attempted - stats.solved;

        stats.completionPercentage = Number(((stats.solved / stats.total) * 100).toFixed(2));
    }

    return difficultyStats;
}

module.exports = {getOverallStats,getTopicStats,getDifficultyStats};