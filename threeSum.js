function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Test cases
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log("Example 1:", threeSum(nums1)); // Output: [[-1,-1,2],[-1,0,1]]

const nums2 = [0, 1, 1];
console.log("Example 2:", threeSum(nums2)); // Output: []

const nums3 = [0, 0, 0];
console.log("Example 3:", threeSum(nums3)); // Output: [[0,0,0]]
