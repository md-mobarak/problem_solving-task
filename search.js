function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      // Check if target is the middle element
      if (nums[mid] === target) {
        return mid;
      }
  
      // Handle the sorted sub-array on the left side (if the middle element is greater than the leftmost element)
      if (nums[mid] >= nums[left]) {
        if (target < nums[mid] && target >= nums[left]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else { // Handle the sorted sub-array on the right side (if the middle element is less than the leftmost element)
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage
  const nums1 = [4, 5, 6, 7, 0, 1, 2];
  const nums2 = [1];
  
  console.log("Target index (Example 1):", search(nums1.slice(), 0));  // Output: 4 (slice to avoid modifying original array)
  console.log("Target index (Example 2):", search(nums1.slice(), 3));  // Output: -1
  console.log("Target index (Example 3):", search(nums2.slice(), 0));  // Output: -1
  