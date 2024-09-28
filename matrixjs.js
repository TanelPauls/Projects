const rows = 50; // Replace with your desired row count (x)
  const cols = 50; // Replace with your desired column count (y)

  // Add CSS variables for rows and columns count
  document.documentElement.style.setProperty('--rows', rows);
  document.documentElement.style.setProperty('--cols', cols);

  const tableBody = document.querySelector('table tbody');

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }