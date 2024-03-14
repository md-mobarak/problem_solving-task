function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Return 0 if array is empty
    
    let uniqueCount = 1; // Initialize unique count to 1 for the first element
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Check if the current element is different from the previous one
        if (nums[i] !== nums[i - 1]) {
            // If different, update the array in-place
            nums[uniqueCount] = nums[i];
            uniqueCount++; // Increment unique count
        }
    }
    
    return uniqueCount; // Return the number of unique elements
}

// Test cases
const nums1 = [1, 1, 2];
console.log("Example 1:", removeDuplicates(nums1), nums1); // Output: 2, nums = [1, 2, _]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Example 2:", removeDuplicates(nums2), nums2); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]

