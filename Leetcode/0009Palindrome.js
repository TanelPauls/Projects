/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){return false}
    else if(x<=9){return true}
    else{
        let a=Math.log(x) * Math.LOG10E + 1 | 0;
        
        if(a%2==0){
            for(let y=0;y<(a/2);y++){
                if(Math.floor(x / Math.pow(10, a - y-1)) % 10 !=Math.floor(x / Math.pow(10, y)) % 10 ){return false}
            }
            return true
        }
        else{
            for(let y=0;y<((a/2)-1);y++){
                if(Math.floor(x / Math.pow(10, a - y-1)) % 10 !=Math.floor(x / Math.pow(10, y)) % 10 ){return false}
            }
            return true
        }
    }
        
};

let number=16861;
console.log(isPalindrome(number))