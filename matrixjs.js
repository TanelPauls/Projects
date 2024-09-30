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
        // at start make first snake
        if(snakeHead.length==0){
            //choose random column first row as start
            var x=Math.floor(Math.random() * Math.floor(window.innerWidth/15));
            snakeHead.push([x,0])
        }

        // Randomly decide if opacity should change
        //const changeOpacity = Math.random() < 0.5;  // 50% chance

        //if (changeOpacity) {
            // Get the current opacity of the cell
        let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);
        if (currentOpacity ==0 ) {// siit pooleli&& ) {
            cell.style.opacity = currentOpacity + 0.8;
        } else {
            cell.style.opacity = 0;  // Reset back to 0 once opacity reaches 1
        }
        

        // Randomize the letter in the cell
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        //cell.textContent = randomLetter//snakeHead[1];
        cell.textContent = snakeHead.length
    });
}



window.onresize = function(){ location.reload(); }

let snakeHead=[];
createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));
window.onload = setInterval(matrixRunner,500);