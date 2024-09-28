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

function matrixRunner() {
    // Get the first row of the table
    const cells = document.querySelectorAll('tr:first-child td');
    
    // Loop through each cell
    cells.forEach(cell => {
        // Generate a random letter (A-Z)
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        
        cell.textContent = randomLetter;
    });
}

window.onresize = function(){ location.reload(); }



createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));

// Run the function once the page loads
//window.onload = addRandomLetterToCells;
window.onload = setInterval(matrixRunner,500);