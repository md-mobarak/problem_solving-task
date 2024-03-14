function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return left; // If target is not found, return the insertion position
}

// Test cases
console.log("Example 1:", searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log("Example 2:", searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log("Example 3:", searchInsert([1, 3, 5, 6], 7)); // Output: 4
