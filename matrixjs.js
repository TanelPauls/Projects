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
    
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        cell.textContent = randomLetter
        
        let cellColor = window.getComputedStyle(cell).color;
        
        let rgbaValues = cellColor.match(/rgba?\((\d+), (\d+), (\d+), (\d?.\d*)\)/);
        let opacity = 0; // Default opacity from CSS

        if (rgbaValues && rgbaValues[4]) {
            opacity = parseFloat(rgbaValues[4]); // Extract opacity from rgba
        }

        // Increment opacity by 0.1
        let newOpacity = Math.min(opacity + 0.1, 1); // Cap at 1
        
        // Set the new color with updated opacity
        cell.style.color = `rgba(0, 255, 0, ${newOpacity})`;
        
        
    });
}



window.onresize = function(){ location.reload(); }



createTable(Math.floor(window.innerHeight/15), Math.floor(window.innerWidth/15));

window.onload = setInterval(matrixRunner,1000);