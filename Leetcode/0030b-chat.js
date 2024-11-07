/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function haveSameElements(arr1, arr2) {
    return arr1.length === arr2.length &&
           arr1.slice().sort().join() === arr2.slice().sort().join();
}

function duplicationAllowance(word, arr2) {
    let ans = 0;
    for (let q = 0; q < arr2.length; q++) {
        if (word === arr2[q]) {
            ans += 1;
        }
    }
    return ans;
}

var findSubstring = function(s, words) {
    if (words.length === 0) return [];
    const answer = [];
    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;
    const wordsCount = {};

    // Create a frequency map for words
    for (const word of words) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    }

    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        const seen = {};
        let j = 0;

        // Check each word-length segment
        while (j < words.length) {
            const word = s.substr(i + j * wordLength, wordLength);

            if (!wordsCount[word]) break;

            seen[word] = (seen[word] || 0) + 1;

            if (seen[word] > wordsCount[word]) break;

            j++;
        }

        if (j === words.length) answer.push(i);
    }

    return answer;
};

// Example usage
let s = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
const words = ["fooo", "barr", "wing", "ding", "wing"];
console.log(findSubstring(s, words));
