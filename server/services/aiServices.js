const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

exports.reviewCode = async ({ questionId, language, code }) => {

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "user",
                content: "Say hello in one sentence."
            }
        ]
    });

    console.log(response.choices[0].message.content);

    return {
        correctness: response.choices[0].message.content,
        timeComplexity: "",
        spaceComplexity: "",
        optimization: [],
        edgeCases: [],
        rating: 10
    };
};