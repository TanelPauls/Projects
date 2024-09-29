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
    // Get the first row of the table
    const cells = document.querySelectorAll('td');
    
    // Gets random number from 0..first row numbers.
    var x=Math.floor(Math.random() * Math.floor(window.innerWidth/15));
    // Loop through each cell
    var v=0
    var cellCounter=0
    let cellHead=false
    let cellMoveDown=false
    cells.forEach(cell => {
        v+=1
        if(x==v && cell.textContent == ""){
            const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            cell.textContent = randomLetter;
            // Creates letter "tail" length between 0.3-0.7 of total height
            cellCounter=randomIntFromInterval(0.3*Math.floor(window.innerHeight/15), 0.7*Math.floor(window.innerHeight/15))
            cell.setAttribute('data-hidden-cellCounter', cellCounter);
            cell.setAttribute('data-hidden-cellHead', true);
            cell.setAttribute('data-hidden-cellMoveDown', false);
            //cell.textContent=cell.getAttribute('data-hidden-cellHead')
        }
        if(cell.textContent != "" && cell.getAttribute('data-hidden-cellHead')==true){
            cell.textContent = "asd"    
            //cell.textContent = "U";
        }
        if(cell.getAttribute('data-hidden-cellHead')==true){
            cell.textContent = "";
            cell.textContent = "asd"    
            //cell.textContent = "U";
        }

        //if(v>Math.floor(window.innerWidth/15)){
            //cell.textContent = cell.cellIndex
            //cell.textContent = cell.cellIndex*cell.closest('tr').rowIndex
        //    cell.textContent ="cell"
        //}
    });
}

window.onresize = function(){ location.reload(); }



createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));

// Run the function once the page loads
//window.onload = addRandomLetterToCells;
window.onload = setInterval(matrixRunner,1000);