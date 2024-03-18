function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Find the candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // If the count of the candidate is more than n/2, return it as the majority element
    if (count > nums.length / 2) {
        return candidate;
    } else {
        throw new Error("Majority element does not exist.");
    }
}

// Test Cases
let nums1 = [3, 2, 3];
console.log("Input:", nums1);
console.log("Output:", majorityElement(nums1));

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log("Input:", nums2);
console.log("Output:", majorityElement(nums2));
