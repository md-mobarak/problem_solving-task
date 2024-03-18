function maxProfit(prices) {
    let minPrice = Infinity; // Initialize minPrice to a high value
    let maxProfit = 0;
  
    for (let price of prices) {
      minPrice = Math.min(minPrice, price); // Update minPrice if current price is lower
      maxProfit = Math.max(maxProfit, price - minPrice); // Calculate potential profit and update maxProfit
    }
  
    return maxProfit;
  }
  
  // Example usage
  const prices1 = [7, 1, 5, 3, 6, 4];
  const prices2 = [7, 6, 4, 3, 1];
  
  console.log("Max profit (Example 1):", maxProfit(prices1)); // Output: 5
  console.log("Max profit (Example 2):", maxProfit(prices2)); // Output: 0
  