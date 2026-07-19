const Joi = require("joi");

const createQuestionSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(3)
        .max(150)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 150 characters",
            "any.required": "Title is required",
        }),

    description: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Description is required",
            "any.required": "Description is required",
        }),

    companies: Joi.array()
        .items(Joi.string().trim())
        .min(1)
        .required()
        .messages({
            "array.min": "At least one company is required",
            "any.required": "Companies are required",
        }),

    difficulty: Joi.string()
        .valid("Easy", "Medium", "Hard")
        .required()
        .messages({
            "any.only": "Difficulty must be Easy, Medium or Hard",
            "any.required": "Difficulty is required",
        }),

    topic: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Topic is required",
            "any.required": "Topic is required",
        }),

    constraints: Joi.string()
        .trim()
        .allow("")
        .default(""),

    leetcodeUrl: Joi.string()
        .uri()
        .required()
        .messages({
            "string.uri": "Please enter a valid LeetCode URL",
            "any.required": "LeetCode URL is required",
        }),

    patterns: Joi.array()
        .items(Joi.string().trim())
        .default([]),

    estimatedTime: Joi.number()
        .integer()
        .min(1)
        .default(30)
        .messages({
            "number.base": "Estimated time must be a number",
            "number.min": "Estimated time must be at least 1 minute",
        }),

    whatYouWillLearn: Joi.array()
        .items(Joi.string().trim())
        .default([]),

    hints: Joi.object({
        brute: Joi.array()
            .items(Joi.string().trim())
            .default([]),

        better: Joi.array()
            .items(Joi.string().trim())
            .default([]),

        optimal: Joi.array()
            .items(Joi.string().trim())
            .default([]),
    })
        .default({
            brute: [],
            better: [],
            optimal: [],
        }),
});

module.exports = {
    createQuestionSchema,
};