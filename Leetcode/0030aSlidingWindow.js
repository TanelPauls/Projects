/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function haveSameElements(arr1, arr2) {
    return arr1.length === arr2.length &&
           arr1.slice().sort().join() === arr2.slice().sort().join();
}
function duplicationAllowance(word,arr2){
    let ans=0;
    for(let q=0;q<arr2.length;q++){
        if(word==arr2[q]){
            ans+=1;
        }
    }
    return ans
}

var findSubstring = function(s, words) {
    if(words.length==0){return []}
    const answer=[];
    wordLength=words[0].length;
    let start = 0;
    let wordsDuplicate = [];
    for (let end = 0; end < s.length; end=end+wordLength) {
        let word="";

        for(let x=0;x<wordLength;x++){
            word+=s[end+x];
        }
        if(!words.includes(word)){
            start=end+wordLength;
            wordsDuplicate=[];
        }
        else{
            if(wordsDuplicate.includes(word)){
                if(duplicationAllowance(word,words)>duplicationAllowance(word,wordsDuplicate)){
                    wordsDuplicate.push(word);
                }
                else{
                    //console.log(wordsDuplicate)
                    wordsDuplicate.push(word);
                    //console.log(wordsDuplicate)
                    while(wordsDuplicate[0]!=word || wordsDuplicate.lenght<1){
                        wordsDuplicate.splice(0,1);
                        start+=1*wordLength;
                    }
                    wordsDuplicate.splice(0,1);
                    start+=1*wordLength;
                }
                //console.log(wordsDuplicate)
                
            }
            else{
                wordsDuplicate.push(word)
                //console.log("-"+wordsDuplicate)
            }
            
            //console.log(word)
            //console.log(wordsDuplicate)
            if(haveSameElements(words,wordsDuplicate)){
                answer.push(start);
                console.log(wordsDuplicate)
            }
        }        
    }
    return answer;
};

let s = "wordgoodgoodgoodbestword";
const words = ["word","good","best","good"]
console.log(findSubstring(s,words))

