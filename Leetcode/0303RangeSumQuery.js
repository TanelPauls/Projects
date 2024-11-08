class NumArray {
    constructor(nums) {
        this.prefixSums = [0];
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i + 1] = this.prefixSums[i] + nums[i];
        }
    }

    sumRange(left, right) {
        return this.prefixSums[right + 1] - this.prefixSums[left];
    }

}

let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
console.log(numArray.sumRange(0, 5)); // Output: -3
console.log(numArray.prefixSums)