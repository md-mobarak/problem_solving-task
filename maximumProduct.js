function maximumProduct(nums) {
    let max1 = Number.NEGATIVE_INFINITY; // Maximum element
    let max2 = Number.NEGATIVE_INFINITY; // Second maximum element
    let min1 = Number.POSITIVE_INFINITY; // Minimum element
    let min2 = Number.POSITIVE_INFINITY; // Second minimum element
  
    for (const num of nums) {
      // Update maximum elements
      if (num > max1) {
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max2 = num;
      }
  
      // Update minimum elements (considering negative numbers for product)
      if (num < min1) {
        min2 = min1;
        min1 = num;
      } else if (num < min2) {
        min2 = num;
      }
    }
  
    return Math.max(max1 * max2 * min1, max1 * min1 * min2);
  }
  
  // Example usage
  const nums1 = [1, 2, 3];
  const nums2 = [1, 2, 3, 4];
  const nums3 = [-1, -2, -3];
  
  console.log("Maximum product (Example 1):", maximumProduct(nums1)); // Output: 6
  console.log("Maximum product (Example 2):", maximumProduct(nums2)); // Output: 24
  console.log("Maximum product (Example 3):", maximumProduct(nums3)); // Output: -6
  