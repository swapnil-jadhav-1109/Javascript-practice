// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// input : [16, 8, 23, 4, 15];
// output [3, 4]
// Target = 19

function twoSum(nums, target) {
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];
        
        // Check if the complement exists in the rest of the array
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === complement) {
                // If it does, return the indices of the current number and its complement
                return [i, j];
            }
        }
    }
    
    // If no solution is found, return an empty array
    return [];
}