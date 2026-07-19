const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters",
            "string.max": "Name cannot exceed 30 characters",
            "any.required": "Name is required",
        }),

    email: Joi.string()
        .trim()
        .email({
            tlds: { allow: false },
        })
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required",
        }),

    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password cannot exceed 30 characters",
            "any.required": "Password is required",
        }),
});

const loginSchema = Joi.object({
    email: Joi.string()
        .trim()
        .email({
            tlds: { allow: false },
        })
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required",
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.empty": "Password is required",
            "any.required": "Password is required",
        }),
});

module.exports = {
    registerSchema,
    loginSchema,
};