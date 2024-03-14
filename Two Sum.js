function twoSum(nums, target) {
    // Create a Map to store the indices of elements
    const numIndices = new Map();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];
        
        // Check if the complement exists in the Map
        if (numIndices.has(complement)) {
            // Return the indices of the two numbers that add up to the target
            return [numIndices.get(complement), i];
        }
        
        // Store the index of the current element in the Map
        numIndices.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array
    return [];
}

// Test cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Example 1:", twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log("Example 2:", twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log("Example 3:", twoSum(nums3, target3)); // Output: [0, 1]
