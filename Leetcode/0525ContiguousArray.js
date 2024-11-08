class MySet {
    constructor() {
      this.map = new Map();
    }
  
    add(key, value) {
      // Check if the key already exists
      if (this.map.has(key)) {
        // If it exists, return the existing value
        //console.log(`${key} already exists with value: ${this.map.get(key)}`);
        return this.map.get(key);
      } else {
        // If it does not exist, add the key-value pair
        this.map.set(key, value);
        //console.log(`${key} added with value: ${value}`);
        return value;
      }
    }
  
    get(key) {
      // Retrieve the value associated with the key
      if (this.map.has(key)) {
        return this.map.get(key);
      } else {
        //console.log(`${key} does not exist in the set`);
        return null;
      }
    }
  
    has(key) {
      return this.map.has(key);
    }
}




var findMaxLength = function(nums) {
    const a = new MySet();
    a.add(0, -1);  // Initial prefix sum 0 at index -1
    let maxLength = 0;
    let prefixSum = 0;

    for (let z = 0; z < nums.length; z++) {
        prefixSum += (nums[z] === 0) ? -1 : 1;

        if (a.has(prefixSum)) {
            maxLength = Math.max(maxLength, z - a.get(prefixSum));
        } else {
            a.add(prefixSum, z);
        }
    }

    return maxLength;
};

let nums=[0,1,1,1,0,0];
console.log(findMaxLength(nums))

/* var findMaxLength = function(nums) {
    let maxLen = 0;
    let count = 0;
    let map = {[0]: -1}; 

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        
        if (map[count] !== undefined) {
            maxLen = Math.max(maxLen, i - map[count]);
        } else {
            map[count] = i;
        }
    }
    console.log(map)
    return maxLen;
}; */
