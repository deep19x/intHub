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

module.exports = { getStats, getStatsOnTopics, getStatsOnDifficulty };