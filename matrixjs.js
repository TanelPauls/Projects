function createTable(rows, cols) {
    // Add CSS variables for rows and columns count
    document.documentElement.style.setProperty('--rows', rows);
    document.documentElement.style.setProperty('--cols', cols);

    const tableBody = document.querySelector('table tbody');
    
    // Clear any existing rows
    tableBody.innerHTML = '';

    // Create rows and columns dynamically
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
        cell.style.opacity = 0
      } 
      tableBody.appendChild(row);
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function matrixRunner() {   
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        // Get current cell coords
        const xCoord = cell.cellIndex
        const yCoord = cell.closest('tr').rowIndex
        // Get current cell opacity
        let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);
        //Make new snake with probability 3%
        const changeOpacity = Math.random() < 0.03;
        if(yCoord==0 && currentOpacity ==0 && changeOpacity){
            snakeHead.push([xCoord,yCoord,0])
            cell.style.opacity = 1;
            const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            cell.textContent = randomLetter

        }
        if(yCoord>0 && currentOpacity ==0){
            for (let i = 0; i < snakeHead.length; i++) {
                if(snakeHead[i][0]==xCoord && snakeHead[i][1]==yCoord && snakeHead[i][2]==1){
                    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    cell.textContent = randomLetter
                    cell.style.opacity = 1;
                }
        
            }
        }
        if(currentOpacity >0){
            cell.style.opacity -= 0.05;
        }

        

    });
    for (let i = 0; i < snakeHead.length; i++) {
        if(snakeHead[i][1]!=Math.floor(window.innerHeight/15)){
            snakeHead[i][1]+=1
        }
        snakeHead[i][2]=1
        if(snakeHead[i][1]==Math.floor(window.innerHeight/15)){
            snakeHead[i][2]=2
        }
        

    }
    let newSnakeHead=[];
    for (let i = 0; i < snakeHead.length; i++) {
        if(snakeHead[i][2]!=2){
            newSnakeHead.push(snakeHead[i])
        }
    }
    snakeHead=newSnakeHead;
}


window.onresize = function(){ location.reload(); }
let snakeHead=[];
createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));

window.onload = setInterval(matrixRunner,50);