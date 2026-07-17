const mongoose = require('mongoose');
const Submission = require("../models/submission");

const getMySubmissions = async (req, res) => {
    try {

        const { questionId } = req.params;

        const submissions = await Submission.find({
            user: req.user.userId,
            question: questionId,
        })
            .select({
                language: 1,
                createdAt: 1,
                "aiReview.rating": 1,
            })
            .sort({ createdAt: -1 })
            .limit(5);

        return res.status(200).json({
            submissions,
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
        });

    }
};
const getSubmissionDetails = async (req, res) => {
    try {

        const { submissionId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(submissionId)) {
            return res.status(400).json({
                message: "Invalid submission ID",
            });
        }

        const submission = await Submission.findOne({
            _id: submissionId,
            user: req.user.userId,
        });

        if (!submission) {
            return res.status(404).json({
                message: "Submission not found",
            });
        }

        return res.status(200).json({
            submission,
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    getMySubmissions, getSubmissionDetails
};