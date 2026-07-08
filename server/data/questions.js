module.exports = [
    {
        title: "Two Sum",

        companies: ["Amazon", "Google", "Microsoft"],

        difficulty: "Easy",

        topic: "Arrays",

        leetcodeUrl: "https://leetcode.com/problems/two-sum/",

        patterns: ["Arrays", "Hashing"],

        estimatedTime: 20,

        whatYouWillLearn: [
            "Using Hash Maps",
            "Finding complements efficiently",
            "Time vs Space tradeoff"
        ],

        hints: {
            brute: [
                "Can you compare every pair of numbers?",
                "Try using two nested loops."
            ],

            better: [
                "Can you avoid checking the same pair multiple times?",
                "Can you remember previously visited numbers?"
            ],

            optimal: [
                "Store each visited number in a Hash Map.",
                "Look for the complement before inserting the current element."
            ]
        }
    },

    {
        title: "Best Time to Buy and Sell Stock",

        companies: ["Amazon", "Facebook", "Microsoft"],

        difficulty: "Easy",

        topic: "Arrays",

        leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",

        patterns: ["Arrays", "Greedy"],

        estimatedTime: 25,

        whatYouWillLearn: [
            "Greedy thinking",
            "Tracking minimum values",
            "Maximizing profit in one pass"
        ],

        hints: {
            brute: [
                "Can you try every possible buy and sell day?",
                "Use nested loops to calculate every profit."
            ],

            better: [
                "Do you really need to compare every pair?",
                "What is the minimum price you've seen so far?"
            ],

            optimal: [
                "Keep track of the minimum price while traversing.",
                "Update maximum profit using the current price."
            ]
        }
    },

    {
        title: "Contains Duplicate",

        companies: ["Amazon", "Apple", "Google"],

        difficulty: "Easy",

        topic: "Arrays",

        leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",

        patterns: ["Arrays", "Hashing"],

        estimatedTime: 15,

        whatYouWillLearn: [
            "Using Hash Sets",
            "Fast duplicate detection"
        ],

        hints: {
            brute: [
                "Can you compare every element with every other element?",
                "Try nested loops."
            ],

            better: [
                "Can you remember the numbers you've already seen?",
                "Which data structure offers fast lookups?"
            ],

            optimal: [
                "Use a Hash Set.",
                "If a number already exists in the set, you've found a duplicate."
            ]
        }
    },

    {
        title: "Product of Array Except Self",

        companies: ["Amazon", "Facebook", "Microsoft"],

        difficulty: "Medium",

        topic: "Arrays",

        leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/",

        patterns: ["Arrays", "Prefix Sum"],

        estimatedTime: 35,

        whatYouWillLearn: [
            "Prefix products",
            "Suffix products",
            "Optimizing space"
        ],

        hints: {
            brute: [
                "Can you compute the product for every index separately?",
                "Multiply all elements except the current one."
            ],

            better: [
                "Can you reuse previous calculations?",
                "Think about prefix and suffix products."
            ],

            optimal: [
                "Compute prefix products in one pass.",
                "Combine them with suffix products using O(1) extra space."
            ]
        }
    },

    {
        title: "Maximum Subarray",

        companies: ["Amazon", "Microsoft", "Google"],

        difficulty: "Medium",

        topic: "Arrays",

        leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",

        patterns: ["Arrays", "Dynamic Programming", "Kadane's Algorithm"],

        estimatedTime: 30,

        whatYouWillLearn: [
            "Kadane's Algorithm",
            "Dynamic Programming intuition",
            "Maintaining running sums"
        ],

        hints: {
            brute: [
                "Can you calculate the sum of every possible subarray?",
                "Try generating all subarrays."
            ],

            better: [
                "Do you need to restart when the running sum becomes negative?",
                "Can a negative prefix help future sums?"
            ],

            optimal: [
                "Use Kadane's Algorithm.",
                "Reset the running sum when it becomes negative."
            ]
        }
    }
]