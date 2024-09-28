function generateTable() {
    // Get user input for rows and columns
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;

    // Check if inputs are valid
    if (rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for both rows and columns.');
        return;
    }

    // Clear any previously generated table
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Create a new table element
    const table = document.createElement('table');

    // Loop to generate rows and columns dynamically
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = `R${i + 1}C${j + 1}`; // Add text to cells
            row.appendChild(cell);
        }

        // Append row to the table
        table.appendChild(row);
    }

    // Append the table to the container div
    tableContainer.appendChild(table);
}