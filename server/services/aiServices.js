export const reviewCode = async ({ questionId, language, code }) => {
    return {
        correctness: "The solution appears to be correct.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        optimization: [
            "Use more descriptive variable names.",
            "Handle edge cases explicitly.",
        ],
        edgeCases: [
            "Empty input",
            "Single element",
            "Duplicate values",
        ],
        rating: 8,
    };
};