function moveZeroes(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// Test Cases
let nums1 = [0, 1, 0, 3, 12];
console.log("Input:", nums1);
console.log("Output:", moveZeroes(nums1));

let nums2 = [0];
console.log("Input:", nums2);
console.log("Output:", moveZeroes(nums2));
