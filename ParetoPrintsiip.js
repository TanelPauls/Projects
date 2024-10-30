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

function randomSotsiaalmeedia(maleOrFemale) {
    if(maleOrFemale==1){
        let ranSots=Math.random();
        if(ranSots<0.26){return 1}
        else if(ranSots<0.54){return 2}
        else if(ranSots<0.7){return 3}
        else if(ranSots<0.82){return 4}
        else {return 5}
    }
    else{
        let ranSots=Math.random();
        if(ranSots<0.24){return 1}
        else if(ranSots<0.46){return 2}
        else if(ranSots<0.66){return 3}
        else if(ranSots<0.84){return 4}
        else {return 5}
    }
}

let myBarChart;
let myBarChart3;


document.addEventListener("DOMContentLoaded", function() {
    let tableContainer = document.querySelector('.table-container');
    let tbody = tableContainer.querySelector('tbody');
    
    // Set the target number of rows
    let targetRowCount = 0;
    let dataMaleFemale=0;
    let dataKokku=0;
    let dataWorkSatisfaction=0;
    let dataWorkSatisfactionOption1=0;
    let dataWorkSatisfactionOption2=0;
    let dataWorkSatisfactionOption3=0;
    let dataWorkSatisfactionOption4=0;
    let dataWorkSatisfactionOption5=0;
    let dataSocialMedia=0;
    let dataRooms=[];
    let dataRooms1=0;
    let dataRooms2=0;
    let dataRooms3=0;
    let dataRooms4=0;
    let dataRooms5=0;
    let dataRooms6=0;
    let dataRooms7=0;
    let dataRooms8Plus=0;

    let dataRoomsInt=0;
    let valueFloor=0;
    let valueCeil=0;
    let value1=0;
    let value2=0;
    let percentileValue=0;
    let rValue=0;
    let totaldata=0;

    function adjustTableRowCount(targetCount) {
        let currentRowCount = tbody ? tbody.querySelectorAll('tr').length : 0;
        if (currentRowCount < targetCount) {
            let rowsToAdd = targetCount - currentRowCount;
            for (let i = 0; i < rowsToAdd; i++) {
                let maleOrFemale=0;
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
                            maleOrFemale=1;
                            dataMaleFemale+=1;
                        }
                        newRow.appendChild(newCell);
                    }
                    else if(j%5==2){
                        let newCell = document.createElement('td');
                        newCell.textContent = randomInteger(1,5);
                        if(newCell.textContent==1){dataWorkSatisfactionOption1+=1;}
                        else if(newCell.textContent==2){dataWorkSatisfactionOption2+=1;}
                        else if(newCell.textContent==3){dataWorkSatisfactionOption3+=1;}
                        else if(newCell.textContent==4){
                            dataWorkSatisfactionOption4+=1;
                            dataWorkSatisfaction+=1;
                        }
                        else if(newCell.textContent==5){
                            dataWorkSatisfactionOption5+=1;
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
                        if(newCell.textContent==1){dataRooms1+=1;}
                        else if(newCell.textContent==2){dataRooms2+=1;}
                        else if(newCell.textContent==3){dataRooms3+=1;}
                        else if(newCell.textContent==4){dataRooms4+=1;}
                        else if(newCell.textContent==5){dataRooms5+=1;}
                        else if(newCell.textContent==6){dataRooms6+=1;}
                        else if(newCell.textContent==7){dataRooms7+=1;}
                        else if(newCell.textContent>=8){dataRooms8Plus+=1;}

                        newRow.appendChild(newCell);
                    }
                    else{
                        let newCell = document.createElement('td');
                        
                        newCell.textContent = randomSotsiaalmeedia(maleOrFemale);
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
            dataWorkSatisfactionOption1=0;
            dataWorkSatisfactionOption2=0;
            dataWorkSatisfactionOption3=0;
            dataWorkSatisfactionOption4=0;
            dataWorkSatisfactionOption5=0;
            dataSocialMedia=0;
            dataRooms=[];
            dataRooms1=0;
            dataRooms2=0;
            dataRooms3=0;
            dataRooms4=0;
            dataRooms5=0;
            dataRooms6=0;
            dataRooms7=0;
            dataRooms8Plus=0;
            dataRoomsInt=0;
            valueFloor=0;
            valueCeil=0;
            value1=0;
            value2=0;
            percentileValue=0;
            rValue=0;
            dataRoomsInt=0;
            totaldata=0;
            
            adjustTableRowCount(0);
            adjustTableRowCount(inputValue);
            totaldata=inputValue;
            var cell = document.getElementById("text1");
            cell.innerHTML = 'Andmete hulk: '+totaldata;
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
            cell.innerHTML = 'Oluline tulemus: "<b>Instagram (1) või Tik-Tok (2)</b>"<br>Arvutatud tabeli põhjal:<br>Kokku vastuseid: '+ dataKokku + '<br>Olulisi tulemusi: ' + dataSocialMedia;
            
            const canvas = document.getElementById('myPieChart');
            const ctx = canvas.getContext('2d');
            const percentage1 = dataKokku - dataMaleFemale;
            const percentage2 = dataMaleFemale;
            const data = [percentage1, percentage2];

            // Define labels and separate colors for pie chart and legend
            const labels = ['Naine', 'Mees'];
            const pieColors = ['#3498db', '#e74c3c']; // Blue for Category 1, Red for Category 2 in the pie chart
            const legendColors = ['#e74c3c', '#3498db']; // Red for Category 1, Blue for Category 2 in the legend

            const total = data.reduce((a, b) => a + b, 0);
            let currentAngle = 0;

            // Draw the pie chart with swapped colors
            data.forEach((percentage, index) => {
                const sliceAngle = (percentage / total) * 2 * Math.PI;
                ctx.beginPath();
                ctx.moveTo(75, 75); // Move to the center of the canvas
                ctx.arc(75, 75, 50, currentAngle, currentAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = pieColors[index];
                ctx.fill();

                currentAngle += sliceAngle;
            });

            // Add legend with consistent colors
            const legendX = 160; // Position of the legend
            let legendY = 20;

            labels.forEach((label, index) => {
                ctx.fillStyle = legendColors[index];
                ctx.fillRect(legendX, legendY, 10, 10); // Color box
                ctx.fillStyle = '#000'; // Text color
                ctx.font = '12px Arial';
                ctx.fillText(label, legendX + 20, legendY + 10); // Label text

                legendY += 20; // Move to the next legend item
            });

            const canvas2 = document.getElementById('myPieChart2');
            const ctx2 = canvas2.getContext('2d');
            if (myBarChart) {
                myBarChart.destroy();
            }
            // Define your data options and colors
            const dataOptions = [1, 2, 3, 4, 5];
            const colors = dataOptions.map(option => (option <= 3 ? '#3498db' : '#e74c3c'));
            
            // Create the bar chart with Chart.js
            myBarChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Responses',
                        data: [dataWorkSatisfactionOption1, dataWorkSatisfactionOption2, dataWorkSatisfactionOption3, dataWorkSatisfactionOption4, dataWorkSatisfactionOption5], // Example data
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'black',
                                font: {
                                    size: 14
                                }
                            }
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Kokku'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Valikud'
                            }
                        }
                    }
                }
            });           



            const canvas3 = document.getElementById('myPieChart3');
            const ctx3 = canvas3.getContext('2d');
            if (myBarChart3) {
                myBarChart3.destroy();
            }

            // Calculate the 80th percentile value for room counts
            const percentileThreshold = percentileValue;

            // Define your data options and colors
            const dataOptions2 = [1, 2, 3, 4, 5, 6, 7, "8+"];
            const colors2 = dataOptions2.map(option => (option <= percentileThreshold ? '#3498db' : '#e74c3c'));


            // Create the bar chart with Chart.js
            myBarChart3 = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['1', '2', '3', '4', '5','6','7','8+'],
                    datasets: [{
                        label: 'Responses',
                        data: [dataRooms1, dataRooms2, dataRooms3, dataRooms4, dataRooms5, dataRooms6, dataRooms7, dataRooms8Plus],
                        backgroundColor: colors2,
                        borderColor: colors2,
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'black',
                                font: {
                                    size: 14
                                }
                            }
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Kokku'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Tubade arv'
                            }
                        }
                    }
                }
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
            const sliceAngle4 = (percentage / total4) * 2 * Math.PI;
            ctx4.beginPath();
            ctx4.moveTo(75, 75); // Move to the center of the canvas
            ctx4.arc(75, 75, 50, currentAngle4, currentAngle4 + sliceAngle4);
            ctx4.closePath();
            ctx4.fillStyle = colors4[index];
            ctx4.fill();

            currentAngle4 += sliceAngle4;
            });
            
            var cell = document.getElementById("cell5");
            cell.innerHTML = 'Kokku küsimusi: '+ dataKokku*4 + '<br>Olulisi tulemusi: ' + (dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia);

            const canvas5 = document.getElementById('myPieChart5');
            const ctx5 = canvas5.getContext('2d');
            const percentage9 = dataKokku*4-(dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia);
            const percentage10 =dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia ;
            const data5 = [percentage9, percentage10];
            const total5 = data5.reduce((a, b) => a + b, 0);
            let currentAngle5 = 0;
            const colors5 = ['#3498db', '#e74c3c'];
            data5.forEach((percentage, index) => {
            const sliceAngle5 = (percentage / total5) * 2 * Math.PI;
            ctx5.beginPath();
            ctx5.moveTo(75, 75); // Move to the center of the canvas
            ctx5.arc(75, 75, 50, currentAngle5, currentAngle5 + sliceAngle5);
            ctx5.closePath();
            ctx5.fillStyle = colors5[index];
            ctx5.fill();

            currentAngle5 += sliceAngle5;
            });

            var cell = document.getElementById("cell6");
            var totalToPercent=Math.round((percentage10*100)/(percentage9+percentage10));
            var totalToPercentNegative=100-totalToPercent;
            cell.innerHTML = "Pareedo Printsiip kehtib nende andmete põhjal seosega: <b>"+totalToPercentNegative+"%-"+totalToPercent+"%</b>";
        
        } else {
            alert('Please enter a valid positive number.');
        }

        

        
    });
});



