/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let helperSet= new Map();
    let duplicateSet=[];
    let stringCounter=0;
    let ans=[];
    for(let x=0;x<strs.length;x++){
        let sortedString=strs[x].split("").sort().join("");
        if(helperSet.has(sortedString)){
            //console.log(duplicateSet[helperSet.get(sortedString)])
            duplicateSet[helperSet.get(sortedString)].push(strs[x])
        }
        else{
            helperSet.set(sortedString,stringCounter);
            duplicateSet[stringCounter]=[strs[x]]
            stringCounter++;
        }
    }
    //console.log(helperSet)
    //console.log(duplicateSet)
    /* for(let y=0;y<duplicateSet.length;y++){
        //console.log(duplicateSet[y])
        for(let m=0;m<duplicateSet[y].length;m++){
            ans.push(duplicateSet[y][m]);
        }
    } */

    return duplicateSet
};

s=["eat","tea","meat","eat"]

console.log(groupAnagrams(s))