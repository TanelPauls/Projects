var addTwoNumbers = function(l1, l2) {
    const answer=[];
    let carry=0;
    let answerDigit;
    if(l1.length>=l2.length){
        for(let i=0;i<l1.length;i++){
            if(l2[i]==undefined){l2[i]=0}
            answerDigit=(l1[i]+l2[i]+carry)%10;
            answer.push(answerDigit);
            if (Math.floor((l1[i] + l2[i]+carry) / 10)){carry=1;}
            else{carry=0;}
        }
    }
    else{
        if(l2[i]==undefined){l2[i]=0}
        answerDigit=(l1[i]+l2[i]+carry)%10;
        answer.push(answerDigit);
        if (Math.floor((l1[i] + l2[i]+carry) / 10)){carry=1;}
        else{carry=0;}
    }
    if(carry==1){answer.push(1)}
    return answer
};
//console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
addTwoNumbers()