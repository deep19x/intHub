const statsServices = require('../services/statsServices');

const getStats = async (req, res) => {
    try {
        const stats = await statsServices.getOverallStats(req.user.userId);
        res.status(200).json(stats)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getStatsOnTopics = async (req, res) => {
    try {

        const stats = await statsServices.getTopicStats(req.user.userId);
        res.status(200).json(stats)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

const getStatsOnDifficulty = async (req, res) => {
    try {
        const stats = await statsServices.getDifficultyStats(req.user.userId);
        res.status(200).json(stats);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const getDashboardStats = async (req, res) => {
    try {
        const userId = req.user.userId;

        const overallStats = await statsServices.getOverallStats(userId);

        const topicStats = await statsServices.getTopicStats(userId);

        const difficultyStats = await statsServices.getDifficultyStats(userId);

        const weakTopics = [];

        for (const topic in topicStats) {
            if (topicStats[topic].completionPercentage < 30) {
                weakTopics.push(topic);
            }
        }

        let message = "";

        if (weakTopics.length > 0) {
            message =
                `Your weak topics are ${weakTopics.join(", ")}. Practice more questions from these topics.`;
        } else {
            message =
                "Great progress! Keep solving questions consistently.";
        }

        return res.status(200).json({
            overallStats,
            difficultyStats,
            weakTopics,
            message
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { getStats, getStatsOnTopics, getStatsOnDifficulty, getDashboardStats};