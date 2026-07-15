// Batch 1: Arrays, Strings, Hashing, Two Pointers, Sliding Window
// ~50 questions. More batches (Linked List, Trees, Graphs, DP, Backtracking,
// Heaps, Stacks/Queues, Greedy, Binary Search, Bit Manipulation, Design) to follow.

module.exports = [
    {
        title: "Two Sum",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Assume exactly one solution exists, and you may not use the same element twice.",
        companies: ["Amazon", "Google", "Microsoft", "Apple", "Adobe"],
        difficulty: "Easy",
        topic: "Arrays",
        constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9",
        leetcodeUrl: "https://leetcode.com/problems/two-sum/",
        patterns: ["Arrays", "Hashing"],
        estimatedTime: 20,
        whatYouWillLearn: ["Using hash maps for O(1) lookups", "Finding complements efficiently", "Time vs space tradeoff"],
        hints: {
            brute: ["Can you compare every pair of numbers?", "Try two nested loops and check each pair's sum."],
            better: ["Can you avoid checking the same pair multiple times?", "What if you remembered numbers you've already seen?"],
            optimal: ["Store each visited number and its index in a hash map.", "For each number, check if target - number already exists in the map before inserting the current one."]
        }
    },
    {
        title: "Best Time to Buy and Sell Stock",
        description: "Given an array prices where prices[i] is the price of a stock on day i, find the maximum profit from a single buy and a later sell. Return 0 if no profit is possible.",
        companies: ["Amazon", "Facebook", "Microsoft", "Bloomberg"],
        difficulty: "Easy",
        topic: "Arrays",
        constraints: "1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        patterns: ["Arrays", "Greedy"],
        estimatedTime: 25,
        whatYouWillLearn: ["Greedy thinking", "Tracking running minimums", "Single-pass maximization"],
        hints: {
            brute: ["Can you try every possible buy and sell day pair?", "Use nested loops and compute every profit."],
            better: ["Do you need to compare every pair?", "What's the lowest price you've seen so far as you scan forward?"],
            optimal: ["Track the minimum price seen so far in one pass.", "At each day, update max profit using currentPrice - minPriceSoFar."]
        }
    },
    {
        title: "Contains Duplicate",
        description: "Given an integer array nums, return true if any value appears at least twice, and false if every element is distinct.",
        companies: ["Amazon", "Apple", "Google"],
        difficulty: "Easy",
        topic: "Arrays",
        constraints: "1 <= nums.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
        patterns: ["Arrays", "Hashing"],
        estimatedTime: 15,
        whatYouWillLearn: ["Using hash sets", "Fast duplicate detection"],
        hints: {
            brute: ["Can you compare every element against every other element?", "Try nested loops."],
            better: ["Can you remember numbers already seen?", "Which structure gives O(1) average lookup?"],
            optimal: ["Use a hash set.", "If the current number is already in the set, return true immediately; otherwise insert it."]
        }
    },
    {
        title: "Product of Array Except Self",
        description: "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements of nums except nums[i], without using division and in O(n) time.",
        companies: ["Amazon", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "2 <= nums.length <= 10^5, product fits in 32-bit int",
        leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/",
        patterns: ["Arrays", "Prefix Sum"],
        estimatedTime: 35,
        whatYouWillLearn: ["Prefix products", "Suffix products", "Space optimization"],
        hints: {
            brute: ["Can you compute the product for every index separately?", "Multiply all elements except the current one, for every i."],
            better: ["Can you reuse earlier calculations?", "Think about prefix and suffix products stored in arrays."],
            optimal: ["Compute prefix products in one pass into the answer array.", "Then multiply in suffix products in a second pass using a single running variable for O(1) extra space."]
        }
    },
    {
        title: "Maximum Subarray",
        description: "Given an integer array nums, find the contiguous subarray with the largest sum and return that sum.",
        companies: ["Amazon", "Microsoft", "Google", "LinkedIn"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "1 <= nums.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
        patterns: ["Arrays", "Dynamic Programming", "Kadane's Algorithm"],
        estimatedTime: 30,
        whatYouWillLearn: ["Kadane's algorithm", "DP intuition on arrays", "Maintaining running sums"],
        hints: {
            brute: ["Can you calculate the sum of every possible subarray?", "Try generating all subarrays with nested loops."],
            better: ["Do you need to restart the sum when it goes negative?", "Can a negative running sum ever help a future subarray?"],
            optimal: ["Use Kadane's Algorithm: currentSum = max(num, currentSum + num).", "Track maxSum as you go, resetting currentSum only conceptually via the max()."]
        }
    },
    {
        title: "Maximum Product Subarray",
        description: "Given an integer array nums, find a contiguous subarray that has the largest product and return that product.",
        companies: ["Amazon", "LinkedIn", "Microsoft"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "1 <= nums.length <= 2*10^4, -10 <= nums[i] <= 10",
        leetcodeUrl: "https://leetcode.com/problems/maximum-product-subarray/",
        patterns: ["Arrays", "Dynamic Programming"],
        estimatedTime: 35,
        whatYouWillLearn: ["Handling sign flips in DP", "Tracking both max and min running products"],
        hints: {
            brute: ["Can you try every subarray and compute its product?", "Nested loops with a running product."],
            better: ["What happens to the max product when you multiply by a negative number?", "Could the minimum product become the maximum after a negative multiplication?"],
            optimal: ["Track both currentMax and currentMin at each index.", "On a negative number, swap currentMax and currentMin before updating them."]
        }
    },
    {
        title: "Find Minimum in Rotated Sorted Array",
        description: "Given a rotated sorted array of unique elements, find the minimum element in O(log n) time.",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "1 <= nums.length <= 5000",
        leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        patterns: ["Binary Search", "Arrays"],
        estimatedTime: 25,
        whatYouWillLearn: ["Modified binary search", "Reasoning about sorted halves"],
        hints: {
            brute: ["Can you scan linearly to find the minimum?", "Try a simple O(n) pass first."],
            better: ["Which half of the array is always sorted?", "Compare nums[mid] with nums[right] to decide direction."],
            optimal: ["If nums[mid] > nums[right], minimum is in the right half; move left = mid+1.", "Otherwise minimum is in the left half including mid; move right = mid."]
        }
    },
    {
        title: "Search in Rotated Sorted Array",
        description: "Given a rotated sorted array and a target value, return the index of target if found, else -1, in O(log n) time.",
        companies: ["Amazon", "Microsoft", "Google", "Facebook"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "1 <= nums.length <= 5000, all values unique",
        leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        patterns: ["Binary Search", "Arrays"],
        estimatedTime: 30,
        whatYouWillLearn: ["Binary search on rotated arrays", "Identifying the sorted half at each step"],
        hints: {
            brute: ["Can you scan linearly for the target?", "O(n) works but doesn't meet the requirement."],
            better: ["At each mid, one half is always properly sorted. Which one?", "Use that to decide whether target could lie in that half."],
            optimal: ["Compare nums[left] with nums[mid] to find the sorted half.", "Check if target lies within that sorted half's range; else search the other half."]
        }
    },
    {
        title: "3Sum",
        description: "Given an integer array nums, return all unique triplets [a, b, c] such that a + b + c = 0.",
        companies: ["Amazon", "Facebook", "Microsoft", "Adobe"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "3 <= nums.length <= 3000",
        leetcodeUrl: "https://leetcode.com/problems/3sum/",
        patterns: ["Arrays", "Two Pointers", "Sorting"],
        estimatedTime: 35,
        whatYouWillLearn: ["Sorting to enable two-pointer scanning", "Avoiding duplicate triplets"],
        hints: {
            brute: ["Can you try every triplet with three nested loops?", "That gives O(n^3) — too slow for large inputs."],
            better: ["What if you fixed one number and searched for a pair summing to its negative?", "Could a hash set help find pairs faster?"],
            optimal: ["Sort the array, fix one element, then use two pointers on the rest.", "Skip duplicate values for both the fixed element and the two pointers to avoid repeated triplets."]
        }
    },
    {
        title: "Container With Most Water",
        description: "Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container holding the most water.",
        companies: ["Amazon", "Google", "Bloomberg"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "2 <= height.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
        patterns: ["Arrays", "Two Pointers", "Greedy"],
        estimatedTime: 25,
        whatYouWillLearn: ["Two-pointer greedy elimination", "Reasoning about which pointer to move"],
        hints: {
            brute: ["Can you try every pair of lines and compute area?", "O(n^2) works but is not optimal."],
            better: ["Start with the widest container. What limits the area — the shorter or taller line?", "Moving the pointer at the taller line can only decrease width without helping height."],
            optimal: ["Use two pointers at both ends.", "Always move the pointer pointing to the shorter line inward, updating the max area each step."]
        }
    },
    {
        title: "Trapping Rain Water",
        description: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
        companies: ["Amazon", "Google", "Microsoft"],
        difficulty: "Hard",
        topic: "Arrays",
        constraints: "1 <= height.length <= 2*10^4",
        leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/",
        patterns: ["Arrays", "Two Pointers", "Stack"],
        estimatedTime: 40,
        whatYouWillLearn: ["Precomputing left/right max arrays", "Two-pointer optimization to O(1) space", "Monotonic stack alternative"],
        hints: {
            brute: ["For each bar, can you find the max height to its left and right?", "Water trapped at i = min(leftMax, rightMax) - height[i]."],
            better: ["Can you precompute leftMax and rightMax arrays in two passes?", "Then combine them in a third pass."],
            optimal: ["Use two pointers from both ends, tracking leftMax and rightMax as you go.", "Move the pointer on the side with the smaller max, since that side's water level is determined."]
        }
    },
    {
        title: "Longest Substring Without Repeating Characters",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        companies: ["Amazon", "Google", "Facebook", "Bloomberg"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "0 <= s.length <= 5*10^4",
        leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        patterns: ["Sliding Window", "Hashing", "Strings"],
        estimatedTime: 30,
        whatYouWillLearn: ["Sliding window technique", "Using a hash map to track last seen indices"],
        hints: {
            brute: ["Can you check every substring for repeating characters?", "That's O(n^3) or O(n^2) — too slow."],
            better: ["Can you maintain a window and shrink it only when a repeat is found?", "A hash set could track characters currently in the window."],
            optimal: ["Maintain a sliding window with a hash map storing last seen index of each character.", "When a repeat is found inside the window, jump the left pointer to just after its last occurrence."]
        }
    },
    {
        title: "Longest Repeating Character Replacement",
        description: "Given a string s and an integer k, find the length of the longest substring containing the same letter after replacing at most k characters.",
        companies: ["Google", "Facebook"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "1 <= s.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        patterns: ["Sliding Window", "Strings"],
        estimatedTime: 35,
        whatYouWillLearn: ["Sliding window with a frequency count", "Window validity check using max frequency"],
        hints: {
            brute: ["Can you try every substring and count replacements needed?", "O(n^2) or worse — too slow for large strings."],
            better: ["Can you track the count of the most frequent character in the current window?", "windowLength - maxFreq gives replacements needed."],
            optimal: ["Expand the window each step; if windowLength - maxFreq > k, shrink from the left.", "Track maxFreq lazily — it never needs to decrease for the answer to stay correct."]
        }
    },
    {
        title: "Find All Anagrams in a String",
        description: "Given two strings s and p, return all start indices of p's anagrams in s.",
        companies: ["Google", "Amazon"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "1 <= s.length, p.length <= 3*10^4",
        leetcodeUrl: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        patterns: ["Sliding Window", "Hashing", "Strings"],
        estimatedTime: 30,
        whatYouWillLearn: ["Fixed-size sliding window", "Frequency map comparison"],
        hints: {
            brute: ["Can you check every substring of length p.length for being an anagram?", "Sorting each substring works but is slow."],
            better: ["Can you use a frequency array of size 26 for both p and the current window?", "Compare frequency arrays instead of sorting."],
            optimal: ["Slide a fixed-size window across s, updating counts as characters enter and leave.", "Whenever the window's frequency array matches p's, record the start index."]
        }
    },
    {
        title: "Minimum Window Substring",
        description: "Given strings s and t, find the minimum window in s that contains all characters of t (with duplicates).",
        companies: ["Amazon", "Google", "Facebook"],
        difficulty: "Hard",
        topic: "Strings",
        constraints: "1 <= s.length, t.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/",
        patterns: ["Sliding Window", "Hashing", "Strings"],
        estimatedTime: 45,
        whatYouWillLearn: ["Variable-size sliding window", "Tracking how many required characters are satisfied"],
        hints: {
            brute: ["Can you check every substring for containing all of t's characters?", "O(n^2) or worse — too slow."],
            better: ["Can you expand a window until it's valid, then shrink from the left?", "Track counts needed vs counts have."],
            optimal: ["Expand right pointer until window is valid, then greedily shrink left while still valid, recording the minimum.", "Use a 'formed' counter to track when all required character counts are satisfied in O(1) per step."]
        }
    },
    {
        title: "Group Anagrams",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        companies: ["Amazon", "Facebook", "Uber"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "1 <= strs.length <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
        patterns: ["Hashing", "Strings", "Sorting"],
        estimatedTime: 25,
        whatYouWillLearn: ["Using a canonical key to group similar items", "Hash map of lists"],
        hints: {
            brute: ["Can you compare every string with every other string for being anagrams?", "O(n^2 * k log k) — slow for many strings."],
            better: ["Can you find a signature that's identical for all anagrams of the same word?", "Sorting the characters of a string gives one such signature."],
            optimal: ["Use the sorted string (or a character count tuple) as a hash map key.", "Append each original string to the list at that key."]
        }
    },
    {
        title: "Valid Anagram",
        description: "Given two strings s and t, return true if t is an anagram of s.",
        companies: ["Amazon", "Google"],
        difficulty: "Easy",
        topic: "Strings",
        constraints: "1 <= s.length, t.length <= 5*10^4",
        leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
        patterns: ["Hashing", "Strings", "Sorting"],
        estimatedTime: 15,
        whatYouWillLearn: ["Frequency counting", "Sorting-based comparison as an alternative"],
        hints: {
            brute: ["Can you sort both strings and compare?", "Sorting gives an easy but O(n log n) solution."],
            better: ["Can you count character frequencies instead of sorting?", "A frequency array of size 26 works for lowercase letters."],
            optimal: ["Build a frequency count for s, decrement for each character in t.", "If any count goes negative or lengths differ, return false; otherwise true."]
        }
    },
    {
        title: "Valid Parentheses",
        description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid (properly closed and nested).",
        companies: ["Amazon", "Google", "Microsoft", "Facebook"],
        difficulty: "Easy",
        topic: "Stacks",
        constraints: "1 <= s.length <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
        patterns: ["Stack", "Strings"],
        estimatedTime: 20,
        whatYouWillLearn: ["Stack-based matching", "Handling mismatched/unclosed brackets"],
        hints: {
            brute: ["Can you repeatedly remove matched adjacent pairs like '()' or '[]'?", "This works but can be inefficient with string rebuilding."],
            better: ["Can you use a stack to remember opening brackets?", "When you see a closing bracket, what should be on top of the stack?"],
            optimal: ["Push opening brackets onto a stack.", "On a closing bracket, pop and check it matches; at the end, the stack must be empty."]
        }
    },
    {
        title: "Longest Palindromic Substring",
        description: "Given a string s, return the longest palindromic substring in s.",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "1 <= s.length <= 1000",
        leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
        patterns: ["Strings", "Dynamic Programming", "Two Pointers"],
        estimatedTime: 35,
        whatYouWillLearn: ["Expand-around-center technique", "DP table for palindrome substrings"],
        hints: {
            brute: ["Can you check every substring for being a palindrome?", "O(n^3) — works only for small inputs."],
            better: ["Can you build a DP table where dp[i][j] means s[i..j] is a palindrome?", "dp[i][j] = dp[i+1][j-1] && s[i]==s[j]."],
            optimal: ["Expand around every possible center (both odd and even length) in O(n) per center.", "Track the longest palindrome found across all centers for O(n^2) total time with O(1) space."]
        }
    },
    {
        title: "Palindromic Substrings",
        description: "Given a string s, return the number of palindromic substrings in it.",
        companies: ["Amazon", "Facebook"],
        difficulty: "Medium",
        topic: "Strings",
        constraints: "1 <= s.length <= 1000",
        leetcodeUrl: "https://leetcode.com/problems/palindromic-substrings/",
        patterns: ["Strings", "Dynamic Programming", "Two Pointers"],
        estimatedTime: 30,
        whatYouWillLearn: ["Expand around center for counting", "Relation to longest palindromic substring"],
        hints: {
            brute: ["Can you check every possible substring for being a palindrome?", "O(n^3) — acceptable only for small n."],
            better: ["Can you reuse the expand-around-center idea from finding the longest palindrome?", "Every palindrome has a center — either a character or a gap between two characters."],
            optimal: ["For each of the 2n-1 centers, expand outward while characters match, counting each valid expansion.", "Sum counts across all centers for the total in O(n^2) time."]
        }
    },
    {
        title: "Longest Common Subsequence",
        description: "Given two strings text1 and text2, return the length of their longest common subsequence, or 0 if none exists.",
        companies: ["Amazon", "Google", "Microsoft"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= text1.length, text2.length <= 1000",
        leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/",
        patterns: ["Dynamic Programming", "Strings"],
        estimatedTime: 35,
        whatYouWillLearn: ["2D DP table construction", "Subsequence vs substring distinction"],
        hints: {
            brute: ["Can you try every subsequence of one string and check if it's in the other?", "Exponential — too slow beyond tiny inputs."],
            better: ["Can you define dp[i][j] as the LCS length of the first i and j characters?", "Think about what happens when the characters match vs don't."],
            optimal: ["If text1[i-1] == text2[j-1], dp[i][j] = dp[i-1][j-1] + 1.", "Otherwise dp[i][j] = max(dp[i-1][j], dp[i][j-1])."]
        }
    },
    {
        title: "Word Break",
        description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.",
        companies: ["Amazon", "Google", "Facebook"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= s.length <= 300",
        leetcodeUrl: "https://leetcode.com/problems/word-break/",
        patterns: ["Dynamic Programming", "Strings"],
        estimatedTime: 35,
        whatYouWillLearn: ["1D DP over string prefixes", "Reduction to reachability problem"],
        hints: {
            brute: ["Can you try every way to split the string recursively?", "This leads to exponential time without memoization."],
            better: ["Can you define dp[i] as whether s[0..i) can be segmented?", "dp[i] is true if some dp[j] is true and s[j..i) is in the dictionary."],
            optimal: ["Build dp array of size n+1, dp[0] = true.", "For each i, check all valid j < i where dp[j] is true and the substring s[j:i] exists in a word set for O(n^2) total."]
        }
    },
    {
        title: "Decode Ways",
        description: "Given a string s containing digits, return the number of ways to decode it into letters (A=1 ... Z=26).",
        companies: ["Amazon", "Facebook"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= s.length <= 100",
        leetcodeUrl: "https://leetcode.com/problems/decode-ways/",
        patterns: ["Dynamic Programming", "Strings"],
        estimatedTime: 30,
        whatYouWillLearn: ["1D DP with two-step lookback", "Careful edge-case handling with zeros"],
        hints: {
            brute: ["Can you recursively try decoding one digit or two digits at each step?", "Exponential without memoization."],
            better: ["Can you define dp[i] as the number of ways to decode the first i characters?", "dp[i] depends on dp[i-1] (single digit) and dp[i-2] (two digits, if valid)."],
            optimal: ["dp[i] += dp[i-1] if s[i-1] != '0'.", "dp[i] += dp[i-2] if the two-digit number s[i-2..i] is between 10 and 26."]
        }
    },
    {
        title: "Climbing Stairs",
        description: "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
        companies: ["Amazon", "Adobe", "Apple"],
        difficulty: "Easy",
        topic: "Dynamic Programming",
        constraints: "1 <= n <= 45",
        leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 15,
        whatYouWillLearn: ["Fibonacci-style recurrence", "Bottom-up DP with O(1) space"],
        hints: {
            brute: ["Can you recursively try taking 1 or 2 steps from each position?", "Exponential without memoization."],
            better: ["Does the number of ways to reach step n relate to steps n-1 and n-2?", "Think of it like a Fibonacci sequence."],
            optimal: ["ways(n) = ways(n-1) + ways(n-2), with base cases ways(0)=1, ways(1)=1.", "Use two variables instead of an array for O(1) space."]
        }
    },
    {
        title: "House Robber",
        description: "Given an array representing money in houses arranged in a line, return the maximum money you can rob without robbing two adjacent houses.",
        companies: ["Amazon", "Google", "Adobe"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= nums.length <= 100",
        leetcodeUrl: "https://leetcode.com/problems/house-robber/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 25,
        whatYouWillLearn: ["DP with an adjacency constraint", "Space-optimized rolling variables"],
        hints: {
            brute: ["Can you try every subset of non-adjacent houses?", "Exponential — too slow for larger inputs."],
            better: ["At each house, what's the best you can do including or excluding it?", "dp[i] = max(dp[i-1], dp[i-2] + nums[i])."],
            optimal: ["Use two rolling variables (prev, prevPrev) instead of a full array.", "Update them each step for O(1) space, O(n) time."]
        }
    },
    {
        title: "House Robber II",
        description: "Houses are arranged in a circle. Return the maximum money you can rob without robbing two adjacent houses, given the first and last house are also adjacent.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= nums.length <= 100",
        leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 30,
        whatYouWillLearn: ["Reducing a circular constraint to two linear subproblems"],
        hints: {
            brute: ["Can you adapt House Robber I directly?", "The circular constraint breaks the simple linear DP."],
            better: ["What if you considered two cases: excluding the first house, or excluding the last house?", "Run linear House Robber on each case."],
            optimal: ["Compute House Robber I on nums[0..n-2] and on nums[1..n-1] separately.", "Return the maximum of the two results."]
        }
    },
    {
        title: "Coin Change",
        description: "Given coin denominations and a target amount, return the fewest number of coins needed to make that amount, or -1 if impossible.",
        companies: ["Amazon", "Google", "Microsoft"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= coins.length <= 12, 0 <= amount <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/coin-change/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 30,
        whatYouWillLearn: ["Unbounded knapsack pattern", "Bottom-up DP over amounts"],
        hints: {
            brute: ["Can you recursively try every coin at each step?", "Exponential without memoization."],
            better: ["Can you define dp[a] as the minimum coins needed for amount a?", "dp[a] = min(dp[a - coin] + 1) over all valid coins."],
            optimal: ["Initialize dp array with infinity, dp[0] = 0.", "For each amount from 1 to target, try every coin and take the minimum, building up bottom-up."]
        }
    },
    {
        title: "Coin Change II",
        description: "Given coin denominations and a target amount, return the number of combinations that make up that amount.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= coins.length <= 300, 0 <= amount <= 5000",
        leetcodeUrl: "https://leetcode.com/problems/coin-change-2/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 30,
        whatYouWillLearn: ["Counting combinations vs permutations in DP", "Order of loops mattering in unbounded knapsack"],
        hints: {
            brute: ["Can you recursively try including or excluding each coin type?", "Exponential without memoization."],
            better: ["Can a 2D dp[i][a] represent using the first i coin types to make amount a?", "This can be compressed to 1D."],
            optimal: ["Loop over coins in the outer loop and amounts in the inner loop.", "dp[a] += dp[a - coin] — looping coins outside prevents counting permutations as distinct."]
        }
    },
    {
        title: "Longest Increasing Subsequence",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        companies: ["Amazon", "Google", "Microsoft"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= nums.length <= 2500",
        leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
        patterns: ["Dynamic Programming", "Binary Search"],
        estimatedTime: 35,
        whatYouWillLearn: ["O(n^2) DP formulation", "O(n log n) patience-sorting / binary search approach"],
        hints: {
            brute: ["Can you try every subsequence and check if it's increasing?", "Exponential — too slow."],
            better: ["Can dp[i] represent the LIS ending exactly at index i?", "dp[i] = 1 + max(dp[j]) for all j < i where nums[j] < nums[i]."],
            optimal: ["Maintain a 'tails' array where tails[k] is the smallest tail of an increasing subsequence of length k+1.", "For each number, binary search for its position in tails and replace or extend — O(n log n)."]
        }
    },
    {
        title: "Edit Distance",
        description: "Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) to convert word1 to word2.",
        companies: ["Google", "Amazon", "Microsoft"],
        difficulty: "Hard",
        topic: "Dynamic Programming",
        constraints: "0 <= word1.length, word2.length <= 500",
        leetcodeUrl: "https://leetcode.com/problems/edit-distance/",
        patterns: ["Dynamic Programming", "Strings"],
        estimatedTime: 40,
        whatYouWillLearn: ["2D DP table for string transformation", "Handling three operation types in a recurrence"],
        hints: {
            brute: ["Can you recursively try insert, delete, or replace at each mismatch?", "Exponential without memoization."],
            better: ["Can dp[i][j] represent the edit distance between the first i and first j characters?", "If characters match, no operation is needed at that position."],
            optimal: ["If word1[i-1] == word2[j-1], dp[i][j] = dp[i-1][j-1].", "Otherwise dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) for delete, insert, replace."]
        }
    },
    {
        title: "Unique Paths",
        description: "A robot on an m x n grid starts at top-left and can move only right or down. Return the number of unique paths to reach the bottom-right corner.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Dynamic Programming",
        constraints: "1 <= m, n <= 100",
        leetcodeUrl: "https://leetcode.com/problems/unique-paths/",
        patterns: ["Dynamic Programming"],
        estimatedTime: 20,
        whatYouWillLearn: ["2D grid DP", "Combinatorics connection (n+m choose n)"],
        hints: {
            brute: ["Can you recursively try moving right or down from each cell?", "Exponential without memoization."],
            better: ["Can dp[i][j] represent the number of paths to reach cell (i,j)?", "dp[i][j] = dp[i-1][j] + dp[i][j-1]."],
            optimal: ["Initialize the first row and column to 1 (only one way to reach them).", "Fill the rest of the grid using the recurrence, or use the combinatorial formula C(m+n-2, m-1)."]
        }
    },
    {
        title: "Number of Islands",
        description: "Given an m x n binary grid representing land ('1') and water ('0'), return the number of islands (connected land regions).",
        companies: ["Amazon", "Google", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "1 <= m, n <= 300",
        leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
        patterns: ["Graphs", "DFS", "BFS", "Union-Find"],
        estimatedTime: 30,
        whatYouWillLearn: ["Grid traversal with DFS/BFS", "Marking visited cells", "Union-Find as an alternative approach"],
        hints: {
            brute: ["Can you scan the grid and, for each unvisited land cell, explore its whole island?", "Think about how to avoid recounting the same island."],
            better: ["Can DFS or BFS flood-fill an entire island once you find its first cell?", "Mark visited cells so you don't count them again."],
            optimal: ["For each cell, if it's land and unvisited, increment island count and flood-fill (DFS/BFS) marking all connected land as visited.", "Union-Find works too: union adjacent land cells and count distinct roots."]
        }
    },
    {
        title: "Clone Graph",
        description: "Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph.",
        companies: ["Amazon", "Facebook", "Google"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "0 <= number of nodes <= 100",
        leetcodeUrl: "https://leetcode.com/problems/clone-graph/",
        patterns: ["Graphs", "DFS", "BFS", "Hashing"],
        estimatedTime: 30,
        whatYouWillLearn: ["Graph traversal with a visited map to avoid infinite loops", "Deep copying recursive structures"],
        hints: {
            brute: ["Can you copy nodes as you traverse, but how do you avoid copying the same node twice?", "A cycle in the graph could cause infinite recursion without tracking visited nodes."],
            better: ["Can a hash map from original node to cloned node prevent duplicate clones?", "Check the map before creating a new clone for any node."],
            optimal: ["DFS (or BFS) from the given node; when visiting a node, create its clone and store it in the map immediately.", "For each neighbor, recursively clone (or fetch from map if already cloned) and attach to the current clone's neighbor list."]
        }
    },
    {
        title: "Course Schedule",
        description: "Given numCourses and a list of prerequisite pairs, return true if it's possible to finish all courses (i.e., no cycle in the dependency graph).",
        companies: ["Amazon", "Google", "Facebook"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "1 <= numCourses <= 2000",
        leetcodeUrl: "https://leetcode.com/problems/course-schedule/",
        patterns: ["Graphs", "Topological Sort", "DFS", "BFS"],
        estimatedTime: 35,
        whatYouWillLearn: ["Cycle detection in directed graphs", "Topological sort via Kahn's algorithm or DFS coloring"],
        hints: {
            brute: ["Can you try every possible course order and check validity?", "Factorial time — infeasible."],
            better: ["Can you detect a cycle in the directed graph of prerequisites?", "If there's a cycle, finishing all courses is impossible."],
            optimal: ["Use Kahn's algorithm: compute in-degrees, repeatedly remove nodes with in-degree 0.", "If all nodes get removed, no cycle exists — return true; otherwise return false."]
        }
    },
    {
        title: "Course Schedule II",
        description: "Given numCourses and prerequisites, return a valid course order to finish all courses, or an empty array if impossible.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "1 <= numCourses <= 2000",
        leetcodeUrl: "https://leetcode.com/problems/course-schedule-ii/",
        patterns: ["Graphs", "Topological Sort"],
        estimatedTime: 35,
        whatYouWillLearn: ["Constructing an actual topological order, not just detecting feasibility"],
        hints: {
            brute: ["Can you try every permutation of courses and check validity?", "Infeasible for large numCourses."],
            better: ["Can Kahn's algorithm both detect cycles and produce an order?", "Track the order in which nodes are removed from the queue."],
            optimal: ["Build in-degree counts and adjacency list; push all in-degree-0 nodes to a queue.", "Repeatedly pop, add to result, decrement neighbors' in-degree, and push newly-zero nodes; if result size < numCourses, return empty."]
        }
    },
    {
        title: "Network Delay Time",
        description: "Given a network of n nodes with weighted directed edges and a source node k, return the time for all nodes to receive a signal sent from k, or -1 if impossible.",
        companies: ["Google", "Amazon"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "1 <= n <= 100",
        leetcodeUrl: "https://leetcode.com/problems/network-delay-time/",
        patterns: ["Graphs", "Dijkstra's Algorithm", "BFS"],
        estimatedTime: 35,
        whatYouWillLearn: ["Dijkstra's algorithm with a priority queue", "Shortest path in weighted graphs"],
        hints: {
            brute: ["Can you try all possible paths from k to every node?", "Exponential — too slow, and doesn't handle weights well."],
            better: ["Can you use BFS layer by layer? Does that work correctly with weighted edges?", "Plain BFS assumes equal edge weights — you need something that accounts for weight."],
            optimal: ["Use Dijkstra's algorithm with a min-heap, starting from node k.", "The answer is the maximum shortest distance to any node; if any node is unreachable, return -1."]
        }
    },
    {
        title: "Pacific Atlantic Water Flow",
        description: "Given an m x n grid of heights, find all cells from which water can flow to both the Pacific and Atlantic oceans.",
        companies: ["Google", "Amazon"],
        difficulty: "Medium",
        topic: "Graphs",
        constraints: "1 <= m, n <= 200",
        leetcodeUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        patterns: ["Graphs", "DFS", "BFS"],
        estimatedTime: 35,
        whatYouWillLearn: ["Multi-source BFS/DFS", "Reversing the flow direction to simplify the problem"],
        hints: {
            brute: ["Can you, for each cell, simulate whether water can flow to both oceans?", "That's O((mn)^2) or worse — too slow."],
            better: ["What if you started DFS/BFS from the ocean borders instead of every cell?", "Water flows uphill in reverse from ocean to cell means an increasing-height DFS from borders."],
            optimal: ["Run DFS/BFS from all Pacific-border cells and mark reachable cells; repeat for Atlantic-border cells.", "The answer is the intersection of both reachable sets."]
        }
    },
    {
        title: "Word Ladder",
        description: "Given a beginWord, endWord, and a word list, return the length of the shortest transformation sequence changing one letter at a time, with each intermediate word in the list.",
        companies: ["Amazon", "Google", "Facebook"],
        difficulty: "Hard",
        topic: "Graphs",
        constraints: "1 <= beginWord.length <= 10",
        leetcodeUrl: "https://leetcode.com/problems/word-ladder/",
        patterns: ["Graphs", "BFS"],
        estimatedTime: 40,
        whatYouWillLearn: ["Modeling an implicit graph (words as nodes, one-letter-diff as edges)", "BFS for shortest path in unweighted graphs"],
        hints: {
            brute: ["Can you try every possible transformation path?", "Exponential — infeasible."],
            better: ["Can you think of words as nodes in a graph, connected if they differ by one letter?", "BFS finds the shortest path in an unweighted graph naturally."],
            optimal: ["BFS from beginWord, at each step trying all single-letter changes and checking if the result is in the word set.", "Track the level (transformation count) and remove visited words from the set to avoid revisiting."]
        }
    },
    {
        title: "Binary Tree Level Order Traversal",
        description: "Given the root of a binary tree, return the level order traversal of its nodes' values (left to right, level by level).",
        companies: ["Amazon", "Google", "Microsoft", "Facebook"],
        difficulty: "Medium",
        topic: "Trees",
        constraints: "0 <= number of nodes <= 2000",
        leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        patterns: ["Trees", "BFS"],
        estimatedTime: 25,
        whatYouWillLearn: ["BFS traversal with level tracking using a queue", "DFS alternative with depth tracking"],
        hints: {
            brute: ["Can you do a DFS and record each node's depth?", "Group nodes by depth afterward."],
            better: ["Can a queue help you process nodes level by level naturally?", "Track how many nodes are in the queue at the start of each level."],
            optimal: ["Use BFS with a queue; at each iteration, process exactly the number of nodes currently in the queue (that's one full level).", "Collect their values into a list and enqueue their children for the next level."]
        }
    },
    {
        title: "Validate Binary Search Tree",
        description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Medium",
        topic: "Trees",
        constraints: "1 <= number of nodes <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
        patterns: ["Trees", "DFS", "Recursion"],
        estimatedTime: 30,
        whatYouWillLearn: ["Passing valid ranges down during recursion", "Common pitfall of only checking immediate children"],
        hints: {
            brute: ["Can you just check that each node is greater than its left child and less than its right child?", "This misses violations from grandparents further up the tree."],
            better: ["Can you pass down a valid (min, max) range as you recurse?", "Each node must fall strictly within the range inherited from its ancestors."],
            optimal: ["Recurse with (node, lowerBound, upperBound); a node is valid if lowerBound < node.val < upperBound.", "Recurse left with (node.val as new upper bound) and right with (node.val as new lower bound)."]
        }
    },
    {
        title: "Lowest Common Ancestor of a Binary Tree",
        description: "Given a binary tree and two nodes p and q, find their lowest common ancestor (LCA).",
        companies: ["Amazon", "Google", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Trees",
        constraints: "2 <= number of nodes <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        patterns: ["Trees", "DFS", "Recursion"],
        estimatedTime: 30,
        whatYouWillLearn: ["Recursive tree search returning information upward", "Recognizing the 'found in both subtrees' base case"],
        hints: {
            brute: ["Can you find the path from root to p and root to q, then compare them?", "The last common node in both paths is the LCA."],
            better: ["Can a single recursive traversal return whether p or q was found in a subtree?", "What does it mean if p is found in the left subtree and q in the right?"],
            optimal: ["Recurse into left and right subtrees; if current node is p or q, return it immediately.", "If both left and right recursive calls return non-null, the current node is the LCA; otherwise return whichever side is non-null."]
        }
    },
    {
        title: "Serialize and Deserialize Binary Tree",
        description: "Design an algorithm to serialize a binary tree to a string and deserialize that string back to the original tree structure.",
        companies: ["Amazon", "Google", "Facebook", "Microsoft"],
        difficulty: "Hard",
        topic: "Trees",
        constraints: "0 <= number of nodes <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        patterns: ["Trees", "DFS", "Design"],
        estimatedTime: 40,
        whatYouWillLearn: ["Preorder serialization with null markers", "Reconstructing a tree from a serialized sequence"],
        hints: {
            brute: ["Can you store level-order values including nulls for missing children?", "This works but can be verbose and tricky for skewed trees."],
            better: ["Can preorder DFS with explicit null markers uniquely represent any binary tree?", "Think about how you'd reconstruct using the same order."],
            optimal: ["Serialize via preorder DFS, appending a marker (e.g., '#') for null children, joined by commas.", "Deserialize by consuming the tokens in the same preorder sequence, recursively building left and right subtrees."]
        }
    },
    {
        title: "Kth Smallest Element in a BST",
        description: "Given the root of a binary search tree and an integer k, return the kth smallest value in the tree.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Trees",
        constraints: "1 <= k <= number of nodes",
        leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        patterns: ["Trees", "DFS", "Binary Search Tree"],
        estimatedTime: 25,
        whatYouWillLearn: ["In-order traversal produces sorted output for a BST", "Early termination once the kth element is found"],
        hints: {
            brute: ["Can you do an in-order traversal and store all values in a list?", "Then just index into the sorted list — but this uses extra space."],
            better: ["Do you need to store all values, or can you stop once you've seen k elements?", "In-order traversal visits BST nodes in sorted order."],
            optimal: ["Do an iterative in-order traversal using an explicit stack.", "Decrement k each time you visit a node; when k reaches 0, that node's value is the answer — no need to traverse further."]
        }
    },
    {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        description: "Given preorder and inorder traversal arrays of a binary tree, construct and return the tree.",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Medium",
        topic: "Trees",
        constraints: "1 <= preorder.length <= 3000",
        leetcodeUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        patterns: ["Trees", "Recursion", "Hashing"],
        estimatedTime: 35,
        whatYouWillLearn: ["Using traversal properties to reconstruct structure", "Hash map for O(1) index lookups in inorder"],
        hints: {
            brute: ["Can you find the root from preorder, then search inorder to split left/right subtrees?", "Searching inorder each time gives O(n) per node — O(n^2) total."],
            better: ["Can a hash map from value to index in inorder speed up the split?", "This avoids repeated linear scans."],
            optimal: ["The first element of preorder is always the root; find its index in inorder (via hash map) to split into left and right subtree ranges.", "Recursively build left subtree from the corresponding preorder/inorder slices, then right subtree, advancing a shared preorder index pointer."]
        }
    },
    {
        title: "Diameter of Binary Tree",
        description: "Given the root of a binary tree, return the length of the diameter — the longest path between any two nodes, which may or may not pass through the root.",
        companies: ["Amazon", "Facebook", "Google"],
        difficulty: "Easy",
        topic: "Trees",
        constraints: "1 <= number of nodes <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/diameter-of-binary-tree/",
        patterns: ["Trees", "DFS", "Recursion"],
        estimatedTime: 20,
        whatYouWillLearn: ["Computing height and diameter in a single DFS pass", "Updating a global/outer answer during recursion"],
        hints: {
            brute: ["Can you compute the height of left and right subtrees for every node separately?", "This recomputes heights repeatedly — O(n^2) overall."],
            better: ["Can a single DFS return height while also updating a running max diameter?", "The diameter through any node is leftHeight + rightHeight."],
            optimal: ["DFS returns the height of each subtree; at each node, update a global max with leftHeight + rightHeight.", "Return 1 + max(leftHeight, rightHeight) up the recursion for the caller's height calculation."]
        }
    },
    {
        title: "Merge K Sorted Lists",
        description: "Given an array of k linked-lists, each sorted in ascending order, merge them into one sorted linked list.",
        companies: ["Amazon", "Google", "Microsoft", "Facebook"],
        difficulty: "Hard",
        topic: "Linked List",
        constraints: "0 <= k <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
        patterns: ["Linked List", "Heap", "Divide and Conquer"],
        estimatedTime: 35,
        whatYouWillLearn: ["Using a min-heap to merge multiple sorted sequences", "Divide-and-conquer pairwise merging as an alternative"],
        hints: {
            brute: ["Can you merge the lists two at a time, one after another?", "This works but can be O(k^2 * n) in the worst case."],
            better: ["Can a min-heap track the smallest current head among all lists?", "Pop the smallest, push its next node, repeat."],
            optimal: ["Use a min-heap seeded with the head of each list; repeatedly pop the minimum, append it to the result, and push its successor if it exists.", "Alternatively, merge lists pairwise in a divide-and-conquer fashion for O(n log k) time."]
        }
    },
    {
        title: "Reverse Linked List",
        description: "Given the head of a singly linked list, reverse the list and return the new head.",
        companies: ["Amazon", "Microsoft", "Google", "Apple"],
        difficulty: "Easy",
        topic: "Linked List",
        constraints: "0 <= number of nodes <= 5000",
        leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
        patterns: ["Linked List", "Recursion"],
        estimatedTime: 20,
        whatYouWillLearn: ["Iterative pointer manipulation", "Recursive reversal approach"],
        hints: {
            brute: ["Can you store all values in an array, then rebuild the list in reverse?", "Works but uses O(n) extra space unnecessarily."],
            better: ["Can you reverse pointers in place as you traverse, using three pointers (prev, current, next)?", "Think about what happens to current.next at each step."],
            optimal: ["Iterate with prev = null, current = head; save next = current.next, set current.next = prev, then advance prev and current.", "Return prev once current becomes null — that's the new head."]
        }
    },
    {
        title: "Linked List Cycle",
        description: "Given the head of a linked list, determine if the linked list has a cycle.",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Easy",
        topic: "Linked List",
        constraints: "0 <= number of nodes <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
        patterns: ["Linked List", "Two Pointers"],
        estimatedTime: 15,
        whatYouWillLearn: ["Floyd's cycle detection (slow/fast pointers)", "Space-efficient alternative to hash set tracking"],
        hints: {
            brute: ["Can you store every visited node in a hash set and check for repeats?", "Works but uses O(n) extra space."],
            better: ["Can two pointers moving at different speeds ever meet without extra space, if a cycle exists?", "Consider a slow pointer moving 1 step and a fast pointer moving 2 steps at a time."],
            optimal: ["Use Floyd's algorithm: slow moves 1 step, fast moves 2 steps.", "If they ever meet, there's a cycle; if fast reaches null, there isn't."]
        }
    },
    {
        title: "Add Two Numbers",
        description: "Given two non-empty linked lists representing two non-negative integers in reverse digit order, add the two numbers and return the sum as a linked list.",
        companies: ["Amazon", "Microsoft", "Adobe"],
        difficulty: "Medium",
        topic: "Linked List",
        constraints: "1 <= number of nodes in each list <= 100",
        leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/",
        patterns: ["Linked List", "Math"],
        estimatedTime: 25,
        whatYouWillLearn: ["Simulating digit-by-digit addition with carry", "Building a new linked list while traversing two others"],
        hints: {
            brute: ["Can you convert both lists to numbers, add them, then convert back to a list?", "This can overflow for very large numbers and defeats the point of the problem."],
            better: ["Can you add node by node while tracking a carry, like manual addition?", "Handle lists of different lengths and a possible final carry."],
            optimal: ["Traverse both lists simultaneously, computing sum = val1 + val2 + carry at each step.", "Create a new node with sum % 10, update carry = sum / 10, and continue until both lists and carry are exhausted."]
        }
    },
    {
        title: "LRU Cache",
        description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache, supporting get and put in O(1) time.",
        companies: ["Amazon", "Google", "Facebook", "Microsoft", "Uber"],
        difficulty: "Medium",
        topic: "Design",
        constraints: "0 <= capacity <= 3000",
        leetcodeUrl: "https://leetcode.com/problems/lru-cache/",
        patterns: ["Design", "Hashing", "Linked List", "Doubly Linked List"],
        estimatedTime: 40,
        whatYouWillLearn: ["Combining a hash map with a doubly linked list for O(1) operations", "Maintaining recency order efficiently"],
        hints: {
            brute: ["Can you use just a hash map and track recency with timestamps?", "Finding the least recently used item would require scanning — not O(1)."],
            better: ["Can a doubly linked list maintain order while a hash map gives O(1) node access?", "Moving a node to the front on access, and removing from the back on eviction, are both O(1) in a doubly linked list."],
            optimal: ["Maintain a hash map from key to list node, and a doubly linked list ordered by recency.", "On get/put, move the accessed node to the front; on capacity overflow, remove the node at the back and its hash map entry."]
        }
    },
    {
        title: "Design In-Memory File System",
        description: "Design a file system that supports ls, mkdir, addContentToFile, and readContentFromFile operations, modeled as a tree of folders and files.",
        companies: ["Google"],
        difficulty: "Hard",
        topic: "Design",
        constraints: "1 <= number of calls <= 300",
        leetcodeUrl: "https://leetcode.com/problems/design-in-memory-file-system/",
        patterns: ["Design", "Trees", "Hashing"],
        estimatedTime: 40,
        whatYouWillLearn: ["Modeling a hierarchical structure with a tree/trie of nodes", "Handling path parsing and traversal"],
        hints: {
            brute: ["Can you store all paths as flat strings in a map?", "This gets messy for supporting ls and mkdir with partial paths."],
            better: ["Can each node in a tree represent a folder or file, with a map of children by name?", "Traverse the tree by splitting the path into components."],
            optimal: ["Model each node with a name, a boolean/content field for files, and a map of child nodes for folders.", "For each operation, split the path by '/' and walk/create nodes level by level, creating missing folders for mkdir and addContentToFile."]
        }
    },
    {
        title: "My Calendar III",
        description: "Implement a calendar where book(start, end) returns the maximum number of events that overlap at any point in time after adding the new event.",
        companies: ["Google"],
        difficulty: "Hard",
        topic: "Design",
        constraints: "0 <= start < end <= 10^9, at most 400 calls",
        leetcodeUrl: "https://leetcode.com/problems/my-calendar-iii/",
        patterns: ["Design", "Sweep Line", "TreeMap", "Segment Tree"],
        estimatedTime: 35,
        whatYouWillLearn: ["Sweep-line technique with delta counting", "Segment tree as an alternative for range updates"],
        hints: {
            brute: ["Can you check the new event against every existing event to count overlaps?", "This is O(n) per call and O(n^2) overall — may be too slow for many calls."],
            better: ["Can you mark +1 at each event's start and -1 at its end, then scan?", "A running sum of these deltas in sorted timestamp order gives the overlap count at any point."],
            optimal: ["Use an ordered map (TreeMap): increment count at start, decrement at end.", "Scan the map in increasing key order, maintaining a running sum, and track the maximum — this max is the answer after each booking."]
        }
    },
    {
        title: "Design Twitter",
        description: "Design a simplified Twitter allowing users to post tweets, follow/unfollow, and see the 10 most recent tweets in their news feed.",
        companies: ["Amazon", "Twitter"],
        difficulty: "Medium",
        topic: "Design",
        constraints: "at most 3*10^4 calls",
        leetcodeUrl: "https://leetcode.com/problems/design-twitter/",
        patterns: ["Design", "Heap", "Hashing"],
        estimatedTime: 40,
        whatYouWillLearn: ["Merging multiple sorted timelines efficiently", "Using a heap to get the top-k most recent items"],
        hints: {
            brute: ["Can you collect all tweets from followed users and sort them by time?", "This works but resorts everything on every feed request — inefficient."],
            better: ["Can a max-heap help you get just the top 10 most recent tweets without full sorting?", "Each user's tweets are already in chronological order — think merge-k-sorted-lists."],
            optimal: ["Store each user's tweets as a list with timestamps; maintain a set of followees per user.", "For getNewsFeed, use a max-heap seeded with the most recent tweet from each relevant user (self + followees), popping the top 10 similar to merging k sorted lists."]
        }
    },
    {
        title: "Top K Frequent Elements",
        description: "Given an integer array nums and an integer k, return the k most frequent elements.",
        companies: ["Amazon", "Facebook", "Google"],
        difficulty: "Medium",
        topic: "Heap",
        constraints: "1 <= nums.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
        patterns: ["Heap", "Hashing", "Bucket Sort"],
        estimatedTime: 30,
        whatYouWillLearn: ["Using a heap for top-k selection", "Bucket sort as an O(n) alternative"],
        hints: {
            brute: ["Can you count frequencies, then sort all elements by frequency?", "Sorting is O(n log n) — there's a faster way."],
            better: ["Can a min-heap of size k track the k most frequent elements as you scan?", "Alternatively, could you bucket elements by frequency value?"],
            optimal: ["Count frequencies with a hash map, then use bucket sort: index buckets by frequency (0 to n).", "Iterate buckets from highest frequency down, collecting elements until you have k — this achieves O(n) time."]
        }
    },
    {
        title: "Kth Largest Element in an Array",
        description: "Given an integer array nums and an integer k, return the kth largest element in the array.",
        companies: ["Amazon", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Heap",
        constraints: "1 <= nums.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        patterns: ["Heap", "Quickselect"],
        estimatedTime: 25,
        whatYouWillLearn: ["Min-heap of size k technique", "Quickselect for average O(n) selection"],
        hints: {
            brute: ["Can you sort the array and index from the end?", "O(n log n) works but isn't optimal."],
            better: ["Can a min-heap of size k track the k largest elements seen so far?", "The heap's root would be the kth largest at the end."],
            optimal: ["Maintain a min-heap of size k; for each number, push it and pop if size exceeds k.", "Alternatively, use Quickselect (partition-based) for average O(n) time without extra heap space."]
        }
    },
    {
        title: "Find Median from Data Stream",
        description: "Design a data structure that supports adding numbers from a stream and finding the median of all elements added so far, efficiently.",
        companies: ["Amazon", "Google", "Facebook"],
        difficulty: "Hard",
        topic: "Heap",
        constraints: "at most 5*10^4 calls",
        leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
        patterns: ["Heap", "Design"],
        estimatedTime: 40,
        whatYouWillLearn: ["Two-heap technique (max-heap for lower half, min-heap for upper half)", "Balancing heaps to maintain O(log n) insert and O(1) median lookup"],
        hints: {
            brute: ["Can you keep all numbers sorted after each insertion?", "Insertion into a sorted array/list is O(n) per operation — could be slow for many calls."],
            better: ["Can you split numbers into a 'lower half' and 'upper half', keeping track of their boundary?", "What data structures give quick access to the max of the lower half and min of the upper half?"],
            optimal: ["Use a max-heap for the lower half and a min-heap for the upper half, keeping their sizes balanced (differ by at most 1).", "The median is the top of the larger heap, or the average of both tops if sizes are equal."]
        }
    },
    {
        title: "Task Scheduler",
        description: "Given a list of CPU tasks and a cooldown period n between same tasks, find the minimum number of time units the CPU needs to finish all tasks.",
        companies: ["Amazon", "Facebook"],
        difficulty: "Medium",
        topic: "Greedy",
        constraints: "1 <= tasks.length <= 10^4, 0 <= n <= 100",
        leetcodeUrl: "https://leetcode.com/problems/task-scheduler/",
        patterns: ["Greedy", "Heap", "Math"],
        estimatedTime: 35,
        whatYouWillLearn: ["Greedy scheduling around the most frequent task", "Formula-based approach using max frequency and idle slots"],
        hints: {
            brute: ["Can you simulate the schedule minute by minute, always picking an available task with the highest remaining count?", "A max-heap can help pick the most frequent available task each round."],
            better: ["Does the task with the highest frequency dictate the overall structure (like a template with gaps)?", "Think about how many 'idle' slots are forced by the cooldown around the most frequent task."],
            optimal: ["Compute maxFreq (highest task count) and the number of tasks tied for that max count.", "Answer = max(tasks.length, (maxFreq - 1) * (n + 1) + numTasksWithMaxFreq)."]
        }
    },
    {
        title: "Merge Intervals",
        description: "Given an array of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals covering all the input.",
        companies: ["Amazon", "Google", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Arrays",
        constraints: "1 <= intervals.length <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/merge-intervals/",
        patterns: ["Arrays", "Sorting", "Greedy"],
        estimatedTime: 25,
        whatYouWillLearn: ["Sorting by start time to simplify merging", "Greedy in-place merging of overlapping ranges"],
        hints: {
            brute: ["Can you compare every interval with every other and merge overlaps repeatedly?", "This can be O(n^2) or worse without a clear stopping condition."],
            better: ["Does sorting intervals by start time make overlaps easier to detect?", "After sorting, overlapping intervals become adjacent."],
            optimal: ["Sort intervals by start time.", "Iterate through, merging the current interval into the last one in the result if they overlap (current.start <= last.end), else append as new."]
        }
    },
    {
        title: "Non-overlapping Intervals",
        description: "Given an array of intervals, return the minimum number of intervals to remove to make the rest non-overlapping.",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Greedy",
        constraints: "1 <= intervals.length <= 10^5",
        leetcodeUrl: "https://leetcode.com/problems/non-overlapping-intervals/",
        patterns: ["Greedy", "Sorting", "Arrays"],
        estimatedTime: 30,
        whatYouWillLearn: ["Classic activity-selection greedy strategy", "Sorting by end time to maximize kept intervals"],
        hints: {
            brute: ["Can you try removing every possible subset of intervals?", "Exponential — infeasible for large inputs."],
            better: ["What if you sorted intervals by their end time?", "Greedily keeping the interval that ends earliest tends to leave more room for future intervals."],
            optimal: ["Sort intervals by end time; keep track of the end of the last kept interval.", "For each interval, if its start is >= last kept end, keep it and update last end; otherwise it must be removed — increment the removal count."]
        }
    },
    {
        title: "Jump Game",
        description: "Given an array where each element represents the maximum jump length from that position, determine if you can reach the last index starting from the first.",
        companies: ["Amazon", "Microsoft"],
        difficulty: "Medium",
        topic: "Greedy",
        constraints: "1 <= nums.length <= 10^4",
        leetcodeUrl: "https://leetcode.com/problems/jump-game/",
        patterns: ["Greedy", "Arrays", "Dynamic Programming"],
        estimatedTime: 25,
        whatYouWillLearn: ["Greedy tracking of the farthest reachable index", "Reduction from a DP formulation to a simpler greedy pass"],
        hints: {
            brute: ["Can you recursively try every possible jump length from each position?", "Exponential without memoization."],
            better: ["Can dp[i] represent whether index i is reachable from the start?", "This works but is O(n^2) in the worst case."],
            optimal: ["Track the farthest index reachable so far while scanning left to right.", "If the current index ever exceeds the farthest reachable point, return false; otherwise update farthest = max(farthest, i + nums[i])."]
        }
    },
    {
        title: "Subsets",
        description: "Given an integer array of unique elements, return all possible subsets (the power set).",
        companies: ["Amazon", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Backtracking",
        constraints: "1 <= nums.length <= 10",
        leetcodeUrl: "https://leetcode.com/problems/subsets/",
        patterns: ["Backtracking", "Bit Manipulation", "Recursion"],
        estimatedTime: 25,
        whatYouWillLearn: ["Backtracking template for combination generation", "Bitmask alternative for generating all subsets"],
        hints: {
            brute: ["Can you generate subsets by deciding include/exclude for each element recursively?", "This naturally produces 2^n subsets."],
            better: ["Can a bitmask from 0 to 2^n - 1 represent every possible subset?", "Each bit position corresponds to whether an element is included."],
            optimal: ["Use backtracking: at each index, recursively explore both including and excluding the current element, adding the current subset to results at each recursive call.", "Or iterate bitmasks 0..2^n-1 and build a subset for each based on set bits."]
        }
    },
    {
        title: "Permutations",
        description: "Given an array of distinct integers, return all possible permutations.",
        companies: ["Amazon", "Facebook", "Microsoft"],
        difficulty: "Medium",
        topic: "Backtracking",
        constraints: "1 <= nums.length <= 6",
        leetcodeUrl: "https://leetcode.com/problems/permutations/",
        patterns: ["Backtracking", "Recursion"],
        estimatedTime: 25,
        whatYouWillLearn: ["Backtracking with a 'used' tracker", "Swapping in-place as an alternative technique"],
        hints: {
            brute: ["Can you generate every ordering by trying each unused element at each position?", "This naturally produces n! permutations."],
            better: ["Can a boolean array track which elements are already used in the current permutation being built?", "Backtrack by marking used, recursing, then unmarking."],
            optimal: ["At each recursive call, try every unused element as the next position, mark it used, recurse, then backtrack by unmarking it.", "When the current permutation reaches full length, add a copy to the results."]
        }
    },
    {
        title: "Combination Sum",
        description: "Given an array of distinct integers and a target, return all unique combinations where the numbers sum to target (numbers may be reused).",
        companies: ["Amazon", "Google"],
        difficulty: "Medium",
        topic: "Backtracking",
        constraints: "1 <= candidates.length <= 30",
        leetcodeUrl: "https://leetcode.com/problems/combination-sum/",
        patterns: ["Backtracking", "Recursion"],
        estimatedTime: 30,
        whatYouWillLearn: ["Backtracking with repetition allowed", "Pruning branches once the running sum exceeds target"],
        hints: {
            brute: ["Can you try every combination of candidates, allowing repeats, up to the target?", "Without pruning this explores many invalid paths."],
            better: ["Can you stop exploring a branch once the running sum exceeds the target?", "Sorting candidates first can help prune earlier."],
            optimal: ["Backtrack starting from each index, allowing the same index to be reused (pass the same start index in the recursive call), and stop when sum equals or exceeds target.", "Sort candidates to enable early pruning when candidate > remaining target."]
        }
    },
    {
        title: "Word Search",
        description: "Given an m x n grid of characters and a word, return true if the word exists in the grid by sequentially adjacent cells.",
        companies: ["Amazon", "Microsoft", "Google"],
        difficulty: "Medium",
        topic: "Backtracking",
        constraints: "1 <= m, n <= 6, 1 <= word.length <= 15",
        leetcodeUrl: "https://leetcode.com/problems/word-search/",
        patterns: ["Backtracking", "DFS", "Arrays"],
        estimatedTime: 35,
        whatYouWillLearn: ["DFS with backtracking on a grid", "Marking and unmarking visited cells during exploration"],
        hints: {
            brute: ["Can you try starting the search from every cell in the grid?", "For each start, explore all four directions matching subsequent letters."],
            better: ["Can you mark a cell as visited temporarily during the current path, then unmark it (backtrack) if that path fails?", "This avoids reusing the same cell twice in one word attempt."],
            optimal: ["DFS from each cell matching word[0]; at each step, temporarily mark the cell visited, try all 4 directions for the next character, and backtrack (unmark) if unsuccessful.", "Return true as soon as any starting cell leads to the full word being matched."]
        }
    }
];