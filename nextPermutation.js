function nextPermutation(nums) {
    // Find the first element from the end such that nums[i] < nums[i+1]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // If no such element is found, reverse the entire array
    if (i === -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }
    
    // Find the smallest element in the suffix nums[i+1:] that is greater than nums[i]
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
        j--;
    }
    
    // Swap nums[i] and nums[j]
    swap(nums, i, j);
    
    // Reverse the suffix nums[i+1:]
    reverse(nums, i + 1, nums.length - 1);
}

// Helper function to reverse the array nums from index start to end
function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}

// Helper function to swap elements at indices i and j in the array nums
function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Test cases
const nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log("Example 1:", nums1); // Output: [1, 3, 2]

const nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log("Example 2:", nums2); // Output: [1, 2, 3]

const nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log("Example 3:", nums3); // Output: [1, 5, 1]
