const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const Question = require("../models/question");
const buildReviewPrompt = require("../util/promptBuilder");
const Submission = require('../models/submission');

exports.reviewCode = async ({ userId,questionId, language, code }) => {

    const question = await Question.findById(questionId);

    if (!question) {
        throw new Error("Question Not Found!");
    }

    const prompt = buildReviewPrompt({
        question,
        language,
        code,
    });

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 0.2,
        response_format: {
            type: "json_object",
        },
    });

    console.log(response.choices[0].message.content);

    try {
        const review = JSON.parse(response.choices[0].message.content);

        await Submission.create({
            user : userId,
            question : questionId,
            language,
            code,
            aiReview:review,
        });
        return review;
    } catch (error) {
        console.error("Failed to parse AI response:", error);

        throw new Error("Invalid AI response");
    }
};