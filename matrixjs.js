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
        // Randomly decide if opacity should change
        const changeOpacity = Math.random() < 0.5;  // 50% chance

        if (changeOpacity) {
            // Get the current opacity of the cell
            let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);

            // If opacity is less than 1, increment it by 0.1, otherwise reset to 0
            if (currentOpacity < 1) {
                cell.style.opacity = currentOpacity + 0.1;
            } else {
                cell.style.opacity = 0;  // Reset back to 0 once opacity reaches 1
            }
        }

        // Randomize the letter in the cell
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        cell.textContent = randomLetter;
    });
}



window.onresize = function(){ location.reload(); }



createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));

window.onload = setInterval(matrixRunner,500);