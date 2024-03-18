function findDuplicates(nums) {
    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i]) - 1; // Use element's value as index
      if (nums[idx] < 0) {
        duplicates.push(Math.abs(nums[i])); // Duplicate found, store absolute value
      } else {
        nums[idx] *= -1; // Mark the element's position as negative to indicate seen
      }
    }
    return duplicates;
  }
  
  // Example usage
  const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
  const nums2 = [1, 1, 2];
  const nums3 = [1];
  
  console.log("Duplicates (Example 1):", findDuplicates(nums1.slice()));  // Output: [2, 3] (slice to avoid modifying original array)
  console.log("Duplicates (Example 2):", findDuplicates(nums2.slice()));  // Output: [1]
  console.log("Duplicates (Example 3):", findDuplicates(nums3.slice()));  // Output: []
  