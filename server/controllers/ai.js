const { reviewCode } = require('../services/aiServices');
const { submitSolutionSchema } = require("../validators/submissionValidator");

const reviewSolution = async (req, res) => {
    try {
        const { error, value } = submitSolutionSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }

        const { questionId, language, code } = value;

        const review = await reviewCode({
            userId: req.user.userId,
            questionId,
            language,
            code
        });

        return res.status(200).json({
            review
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to review solution."
        });
    }
}

module.exports = { reviewSolution };