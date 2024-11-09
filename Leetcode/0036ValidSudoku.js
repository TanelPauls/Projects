/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    if(board.length!=9){return false}
    sudokuCheck=function(arr){
        const sudokuLine=new Set();
        for(let y=0;y<arr.length;y++){
            if(arr[y]==="." || !sudokuLine.has(arr[y]) && arr[y]<=9 && arr[y]>=1 && (Number.isInteger(Number(arr[y])) && !arr[y].includes('.'))){
                sudokuLine.add(arr[y])
            }
            else{return false}
        }
        console.log(sudokuLine)
    return true
    }

    
    let sudokubox1=[];
    let sudokubox2=[];
    let sudokubox3=[];

    const sudokuColumn1=[];
    const sudokuColumn2=[];
    const sudokuColumn3=[];
    const sudokuColumn4=[];
    const sudokuColumn5=[];
    const sudokuColumn6=[];
    const sudokuColumn7=[];
    const sudokuColumn8=[];
    const sudokuColumn9=[];
    for(let x=0;x<board.length;x++){
        if(!sudokuCheck(board[x])){return false}
        if(x==0 || x==1){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);
        }
        else if(x==2){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);

            if(!sudokuCheck(sudokubox1)){return false}
            if(!sudokuCheck(sudokubox2)){return false}
            if(!sudokuCheck(sudokubox3)){return false}
            sudokubox1=[];
            sudokubox2=[];
            sudokubox3=[];
        }
        else if(x==3 || x==4){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);
        }
        else if(x==5){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);

            if(!sudokuCheck(sudokubox1)){return false}
            if(!sudokuCheck(sudokubox2)){return false}
            if(!sudokuCheck(sudokubox3)){return false}
            sudokubox1=[];
            sudokubox2=[];
            sudokubox3=[];
        }
        else if(x==6 || x==7){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);
        }
        else if(x==8){
            sudokubox1.push(board[x][0]);
            sudokubox1.push(board[x][1]);
            sudokubox1.push(board[x][2]);
            sudokubox2.push(board[x][3]);
            sudokubox2.push(board[x][4]);
            sudokubox2.push(board[x][5]);
            sudokubox3.push(board[x][6]);
            sudokubox3.push(board[x][7]);
            sudokubox3.push(board[x][8]);

            sudokuColumn1.push(board[x][0]);
            sudokuColumn2.push(board[x][1]);
            sudokuColumn3.push(board[x][2]);
            sudokuColumn4.push(board[x][3]);
            sudokuColumn5.push(board[x][4]);
            sudokuColumn6.push(board[x][5]);
            sudokuColumn7.push(board[x][6]);
            sudokuColumn8.push(board[x][7]);
            sudokuColumn9.push(board[x][8]);

            if(!sudokuCheck(sudokubox1)){return false}
            if(!sudokuCheck(sudokubox2)){return false}
            if(!sudokuCheck(sudokubox3)){return false}

            if(!sudokuCheck(sudokuColumn1)){return false}
            if(!sudokuCheck(sudokuColumn2)){return false}
            if(!sudokuCheck(sudokuColumn3)){return false}
            if(!sudokuCheck(sudokuColumn4)){return false}
            if(!sudokuCheck(sudokuColumn5)){return false}
            if(!sudokuCheck(sudokuColumn6)){return false}
            if(!sudokuCheck(sudokuColumn7)){return false}
            if(!sudokuCheck(sudokuColumn8)){return false}
            if(!sudokuCheck(sudokuColumn9)){return false}
        }
        
    }
    console.log(sudokuColumn4)
    return true
};

board =
[[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(board))