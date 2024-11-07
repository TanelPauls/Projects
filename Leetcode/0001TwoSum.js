var twoSum = function(nums, target) {
    const hashMap = {}; // Create an empty hash map (object in JavaScript)
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the hash map
        if (hashMap.hasOwnProperty(complement)) {
            // If it exists, return the indices of the complement and current element
            return [hashMap[complement], i];
        }
        
        // Otherwise, add the current number to the hash map with its index
        hashMap[nums[i]] = i;
    }
    
    // Return an empty array if no solution found
    return [];
};

// Example usage:
//twoSum([3, 2, 4], 6);
console.log(twoSum([3, 2, 4], 6))