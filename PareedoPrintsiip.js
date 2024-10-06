function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function poissonRandom(lambda) {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1;

    do {
        k++;
        let u = Math.random();  // Generate a random number between 0 and 1
        p *= u;
    } while (p > L);

    return k - 1;
}

function randomSotsiaalmeedia() {
    let ranSots=Math.random();
    if(ranSots<0.25){return 1}
    else if(ranSots<0.5){return 2}
    else if(ranSots<0.7){return 3}
    else if(ranSots<0.9){return 4}
    else {return 5}
}



document.addEventListener("DOMContentLoaded", function() {
    let tableContainer = document.querySelector('.table-container');
    let tbody = tableContainer.querySelector('tbody');
    
    // Set the target number of rows
    let targetRowCount = 0;
    let dataMaleFemale=0;
    let dataKokku=0;
    let dataWorkSatisfaction=0;

    function adjustTableRowCount(targetCount) {
        let currentRowCount = tbody ? tbody.querySelectorAll('tr').length : 0;
        
        
        
        let dataRooms=0;
        let dataSocialMedia=0;

        if (currentRowCount < targetCount) {
            let rowsToAdd = targetCount - currentRowCount;
            for (let i = 0; i < rowsToAdd; i++) {
                dataKokku+=1;
                let newRow = document.createElement('tr');
                // Add 5 cells to each new row (adjust the number of cells if needed)
                for (let j = 0; j < 5; j++) {
                    if(j==0){
                        let newCell = document.createElement('td');
                        newCell.textContent = currentRowCount+i+1;
                        newRow.appendChild(newCell);
                    }
                    else if(j%5==1){
                        let newCell = document.createElement('td');
                        newCell.textContent = randomInteger(0,1);
                        if(newCell.textContent==1){
                            dataMaleFemale+=1;
                        }
                        newRow.appendChild(newCell);
                    }
                    else if(j%5==2){
                        let newCell = document.createElement('td');
                        newCell.textContent = randomInteger(1,5);
                        if(newCell.textContent==4 || newCell.textContent==5){
                            dataWorkSatisfaction+=1;
                        }
                        newRow.appendChild(newCell);
                    }
                    else if(j%5==3){
                        let newCell = document.createElement('td');
                        let lambda = 3;
                        newCell.textContent = poissonRandom(lambda);
                        newRow.appendChild(newCell);
                    }
                    else{
                        let newCell = document.createElement('td');
                        newCell.textContent = randomSotsiaalmeedia();
                        newRow.appendChild(newCell);
                    }
                }
                tbody.appendChild(newRow);
            }
        }
        // If the current row count is greater than the target, remove excess rows
        else if (currentRowCount > targetCount) {
            let rowsToRemove = currentRowCount - targetCount;
            for (let i = 0; i < rowsToRemove; i++) {
                tbody.removeChild(tbody.lastElementChild);  // Remove the last row
            }
        }
    }

    // Call the function to adjust the table rows when the page loads
    adjustTableRowCount(targetRowCount);    
    let addButton = document.getElementById('btn1');
    
    addButton.addEventListener('click', function() {
        const inputField = document.getElementById('userInput');
        const inputValue = parseInt(inputField.value);

        if (!isNaN(inputValue) && inputValue > 0) {
            targetRowCount = 0;
            dataMaleFemale=0;
            dataKokku=0;
            dataWorkSatisfaction=0;
            adjustTableRowCount(0);
            adjustTableRowCount(inputValue);
            var cell = document.getElementById("cell1");
            cell.innerHTML = 'Oluline tulemus: "Naine"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataMaleFemale;
            var cell = document.getElementById("cell2");
            cell.innerHTML = 'Oluline tulemus: "4 ja 5"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataWorkSatisfaction;               
        } else {
            alert('Please enter a valid positive number.');
        }

        
    });
});


