const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
            required: true,
        },

        language: {
            type: String,
            required: true,
            trim: true,
        },

        code: {
            type: String,
            required: true,
        },

        aiReview: {
            rating: {
                type: Number,
                required: true,
            },

            correctness: {
                type: String,
                required: true,
            },

            timeComplexity: {
                type: String,
                required: true,
            },

            spaceComplexity: {
                type: String,
                required: true,
            },

            optimization: [
                {
                    type: String,
                },
            ],

            edgeCases: [
                {
                    type: String,
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Submission", submissionSchema);