const {reviewCode} = require('../services/aiServices');

const reviewSolution = async(req,res) => {
    try {
        const {questionId,language,code} = req.body;

        if(!questionId || !language || !code){
            return res.status(400).json({
                message : "Question id,language,code is required"
            });
        }

        const review = await reviewCode({
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

module.exports = {reviewSolution};