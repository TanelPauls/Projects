var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;
    let seenChars = new Set();

    for (let end = 0; end < s.length; end++) {
        while (seenChars.has(s[end])) {
            seenChars.delete(s[start]);
            start++;
        }
        seenChars.add(s[end]);
        longest = Math.max(longest, end - start + 1);
    }
    return longest;
};

let s = "abcaaadasddasdfgaaasdf";
console.log(lengthOfLongestSubstring(s));