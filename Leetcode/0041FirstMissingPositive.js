/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n=nums.length;
    for(let x=0;x<nums.length;x++){
        if(nums[x]<=0 || nums[x]>n){
            nums[x]=n+1
        }

    }
    
    //console.log(nums)

    for(let x=0;x<nums.length;x++){
        let num=Math.abs(nums[x]);
        if(num>n){continue}
        num--;
        if(nums[num]>0){
            nums[num]=-1*nums[num]
        }
    }
    //console.log(nums)

    for(let x=0;x<nums.length;x++){
        if(nums[x]>0){return x+1}    
    }
    return n+1

};

s=[1,-1,3,4];
console.log(firstMissingPositive(s))