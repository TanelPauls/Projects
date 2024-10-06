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
    let dataSocialMedia=0;
    let dataRooms=[];
    let dataRoomsInt=0;
    let valueFloor=0;
    let valueCeil=0;
    let value1=0;
    let value2=0;
    let percentileValue=0;
    let rValue=0;

    function adjustTableRowCount(targetCount) {
        let currentRowCount = tbody ? tbody.querySelectorAll('tr').length : 0;
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
                        let poissonValue = poissonRandom(lambda); 
                        newCell.textContent = poissonValue;
                        dataRooms.push(poissonValue);  // Push numeric value directly
                        newRow.appendChild(newCell);
                    }
                    else{
                        let newCell = document.createElement('td');
                        newCell.textContent = randomSotsiaalmeedia();
                        if(newCell.textContent==1 || newCell.textContent==2){
                            dataSocialMedia+=1;
                        }
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
            dataSocialMedia=0;
            dataRooms=[];
            dataRoomsInt=0;
            valueFloor=0;
            valueCeil=0;
            value1=0;
            value2=0;
            percentileValue=0;
            rValue=0;
            dataRoomsInt=0;
            adjustTableRowCount(0);
            adjustTableRowCount(inputValue);
            var cell = document.getElementById("cell1");
            cell.innerHTML = 'Oluline tulemus: "<b>Naine</b>"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataMaleFemale;
            var cell = document.getElementById("cell2");
            cell.innerHTML = 'Oluline tulemus: "<b>4 ja 5</b>"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataWorkSatisfaction;               
            var cell = document.getElementById("cell3");
            
 
            dataRooms.sort(function(a, b) {
                return a - b;
              });;
            rValue=(80/100)*(dataKokku+1);
            valueFloor=Math.floor(rValue);
            valueCeil=Math.ceil(rValue);
            value1=dataRooms[valueFloor-1];
            value2=dataRooms[valueCeil-1];
            percentileValue=value1+((rValue-valueFloor)*(value2-value1));
            
            let q=0;
            while(q<dataRooms.length){
                if(dataRooms[q]>percentileValue){dataRoomsInt+=1;}
                q++;
            }

            cell.innerHTML = 'Oluline tulemus: "<b>Suurem tubade arv, kui 80% testi täitjatest.</b>"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' +dataRoomsInt;
            var cell = document.getElementById("cell4");
            cell.innerHTML = 'Oluline tulemus: "<b>Instagram (1) ja Tik-Tok (2)</b>"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataSocialMedia;
            
            const canvas = document.getElementById('myPieChart');
            const ctx = canvas.getContext('2d');
            const percentage1 = dataKokku-dataMaleFemale;
            const percentage2 = dataMaleFemale;
            const data = [percentage1, percentage2];
            const total = data.reduce((a, b) => a + b, 0);
            let currentAngle = 0;
            const colors = ['#3498db', '#e74c3c'];
            data.forEach((percentage, index) => {
            const sliceAngle = (percentage / total) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(75, 75); // Move to the center of the canvas
            ctx.arc(75, 75, 50, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = colors[index];
            ctx.fill();

            currentAngle += sliceAngle;
            });

            const canvas2 = document.getElementById('myPieChart2');
            const ctx2 = canvas2.getContext('2d');
            const percentage3 = dataKokku-dataWorkSatisfaction;
            const percentage4 = dataWorkSatisfaction;
            const data2 = [percentage3, percentage4];
            const total2 = data2.reduce((a, b) => a + b, 0);
            let currentAngle2 = 0;
            const colors2 = ['#3498db', '#e74c3c'];
            data2.forEach((percentage, index) => {
            const sliceAngle2 = (percentage / total) * 2 * Math.PI;
            ctx2.beginPath();
            ctx2.moveTo(75, 75); // Move to the center of the canvas
            ctx2.arc(75, 75, 50, currentAngle2, currentAngle2 + sliceAngle2);
            ctx2.closePath();
            ctx2.fillStyle = colors2[index];
            ctx2.fill();

            currentAngle2 += sliceAngle2;
            });

            const canvas3 = document.getElementById('myPieChart3');
            const ctx3 = canvas3.getContext('2d');
            const percentage5 = dataKokku-dataRoomsInt;
            const percentage6 = dataRoomsInt;
            const data3 = [percentage5, percentage6];
            const total3 = data3.reduce((a, b) => a + b, 0);
            let currentAngle3 = 0;
            const colors3 = ['#3498db', '#e74c3c'];
            data3.forEach((percentage, index) => {
            const sliceAngle3 = (percentage / total) * 2 * Math.PI;
            ctx3.beginPath();
            ctx3.moveTo(75, 75); // Move to the center of the canvas
            ctx3.arc(75, 75, 50, currentAngle3, currentAngle3 + sliceAngle3);
            ctx3.closePath();
            ctx3.fillStyle = colors3[index];
            ctx3.fill();

            currentAngle3 += sliceAngle3;
            });

            const canvas4 = document.getElementById('myPieChart4');
            const ctx4 = canvas4.getContext('2d');
            const percentage7 = dataKokku-dataSocialMedia;
            const percentage8 = dataSocialMedia;
            const data4 = [percentage7, percentage8];
            const total4 = data4.reduce((a, b) => a + b, 0);
            let currentAngle4 = 0;
            const colors4 = ['#3498db', '#e74c3c'];
            data4.forEach((percentage, index) => {
            const sliceAngle4 = (percentage / total) * 2 * Math.PI;
            ctx4.beginPath();
            ctx4.moveTo(75, 75); // Move to the center of the canvas
            ctx4.arc(75, 75, 50, currentAngle4, currentAngle4 + sliceAngle4);
            ctx4.closePath();
            ctx4.fillStyle = colors4[index];
            ctx4.fill();

            currentAngle4 += sliceAngle4;
            });

        
        } else {
            alert('Please enter a valid positive number.');
        }

        

        
    });
});



