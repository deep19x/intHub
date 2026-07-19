const Joi = require("joi");

const submitSolutionSchema = Joi.object({
    questionId: Joi.string()
        .required()
        .messages({
            "string.empty": "Question ID is required",
            "any.required": "Question ID is required",
        }),

    language: Joi.string()
        .valid("cpp", "java", "python", "javascript")
        .required()
        .messages({
            "any.only": "Language must be cpp, java, python or javascript",
            "string.empty": "Language is required",
            "any.required": "Language is required",
        }),

    code: Joi.string()
        .trim()
        .min(10)
        .required()
        .messages({
            "string.empty": "Code is required",
            "string.min": "Code must be at least 10 characters",
            "any.required": "Code is required",
        }),
});

module.exports = {
    submitSolutionSchema,
};