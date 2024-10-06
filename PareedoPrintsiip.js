document.addEventListener("DOMContentLoaded", function() {
    // Select the table inside the .table-container div
    let tableContainer = document.querySelector('.table-container');
    
    // Select all the rows in the tbody of the inner table
    let rows = tableContainer.querySelectorAll('tbody tr');
    
    // Check if the rows and cells exist to avoid errors
    if (rows.length > 1 && rows[1].cells.length > 1) {
        // Set the text content of the second row (index 1) and second column (index 1)
        rows[2].cells[4].textContent = "troll";
    }
});
