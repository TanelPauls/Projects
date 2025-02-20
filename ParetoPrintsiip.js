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

function findMode(data) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    // Count the frequency of each number
    data.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
        }
    });

    // Find all numbers with the maximum frequency
    for (const num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    return modes;
}

function findMedian(data) {
    // Sort the data array in ascending order
    data.sort((a, b) => a - b);

    const length = data.length;

    // If the length is odd, return the middle element
    if (length % 2 === 1) {
        return data[Math.floor(length / 2)];
    } 
    // If the length is even, return the average of the two middle elements
    else {
        const mid1 = data[length / 2 - 1];
        const mid2 = data[length / 2];
        return (mid1 + mid2) / 2;
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
    let dataRooms0=0;
    let dataRooms1=0;
    let dataRooms2=0;
    let dataRooms3=0;
    let dataRooms4=0;
    let dataRooms5=0;
    let dataRooms6=0;
    let dataRooms7=0;
    let dataRooms8Plus=0;
    let dataTotalRooms=0;
    let dataRoomsInt=0;
    let dataRoomsArray=[];
    let dataMean=0;
    let valueFloor=0;
    let valueCeil=0;
    let value1=0;
    let value2=0;
    let percentileValue=0;
    let rValue=0;
    let totaldata=0;

    let femaleInst=0;
    let femaleTik=0;
    let femaleTwi=0;
    let femaleFace=0;
    let femaleEls=0;
    let maleInst=0;
    let maleTik=0;
    let maleTwi=0;
    let maleFace=0;
    let maleEls=0;

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
                        if(newCell.textContent==1){dataRooms1+=1;dataTotalRooms+=1;dataRoomsArray.push(1)}
                        else if(newCell.textContent==0){dataRooms0+=1;dataRoomsArray.push(0)}
                        else if(newCell.textContent==2){dataRooms2+=1;dataTotalRooms+=2;dataRoomsArray.push(2)}
                        else if(newCell.textContent==3){dataRooms3+=1;dataTotalRooms+=3;dataRoomsArray.push(3)}
                        else if(newCell.textContent==4){dataRooms4+=1;dataTotalRooms+=4;dataRoomsArray.push(4)}
                        else if(newCell.textContent==5){dataRooms5+=1;dataTotalRooms+=5;dataRoomsArray.push(5)}
                        else if(newCell.textContent==6){dataRooms6+=1;dataTotalRooms+=6;dataRoomsArray.push(6)}
                        else if(newCell.textContent==7){dataRooms7+=1;dataTotalRooms+=7;dataRoomsArray.push(7)}
                        else if(newCell.textContent>=8){dataRooms8Plus+=1;dataTotalRooms += parseInt(newCell.textContent, 10);dataRoomsArray.push(parseInt(newCell.textContent, 10))}

                        newRow.appendChild(newCell);
                    }
                    else{
                        let newCell = document.createElement('td');
                        
                        newCell.textContent = randomSotsiaalmeedia(maleOrFemale);
                        if(newCell.textContent==1 || newCell.textContent==2){
                            dataSocialMedia+=1;
                        }
                        newRow.appendChild(newCell);
                        if(maleOrFemale==1 && newCell.textContent==1){
                            femaleInst+=1;
                        }
                        else if(maleOrFemale==1 && newCell.textContent==2){
                            femaleTik+=1;
                        }
                        else if(maleOrFemale==1 && newCell.textContent==3){
                            femaleTwi+=1;
                        }
                        else if(maleOrFemale==1 && newCell.textContent==4){
                            femaleFace+=1;
                        }
                        else if(maleOrFemale==1 && newCell.textContent==5){
                            femaleEls+=1;
                        }

                        if(maleOrFemale==0 && newCell.textContent==1){
                            maleInst+=1;
                        }
                        else if(maleOrFemale==0 && newCell.textContent==2){
                            maleTik+=1;
                        }
                        else if(maleOrFemale==0 && newCell.textContent==3){
                            maleTwi+=1;
                        }
                        else if(maleOrFemale==0 && newCell.textContent==4){
                            maleFace+=1;
                        }
                        else if(maleOrFemale==0 && newCell.textContent==5){
                            maleEls+=1;
                        }

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
            dataRoomsArray=[];
            dataRooms0=0;
            dataRooms1=0;
            dataRooms2=0;
            dataRooms3=0;
            dataRooms4=0;
            dataRooms5=0;
            dataRooms6=0;
            dataRooms7=0;
            dataRooms8Plus=0;
            dataTotalRooms=0;
            dataRoomsInt=0;
            dataMean=0;
            valueFloor=0;
            valueCeil=0;
            value1=0;
            value2=0;
            percentileValue=0;
            rValue=0;
            dataRoomsInt=0;
            totaldata=0;
            femaleInst=0;
            femaleTik=0;
            femaleTwi=0;
            femaleFace=0;
            femaleEls=0;
            maleInst=0;
            maleTik=0;
            maleTwi=0;
            maleFace=0;
            maleEls=0;
            
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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
            var cell = document.getElementById("text2");
            let dataMeanResult=dataTotalRooms/totaldata;
            cell.innerHTML = dataMeanResult.toFixed(5);
            
            let dataMeanSums=0;
            for(let c=0;c<dataRoomsArray.length;c++){
                dataMeanSums += Math.pow((dataRoomsArray[c] - dataMeanResult), 2);
            }
            var cell = document.getElementById("text3");
            cell.innerHTML = Math.sqrt((dataMeanSums/(totaldata-1))).toFixed(5);

            var cell = document.getElementById("text4");
            cell.innerHTML = (findMode(dataRoomsArray));

            var cell = document.getElementById("text5");
            cell.innerHTML = (findMedian(dataRoomsArray));

            const canvas3 = document.getElementById('myPieChart3');
            const ctx3 = canvas3.getContext('2d');
            if (myBarChart3) {
                myBarChart3.destroy();
            }

            // Calculate the 80th percentile value for room counts
            const percentileThreshold = percentileValue;

            // Define your data options and colors
            const dataOptions2 = [0, 1, 2, 3, 4, 5, 6, 7, "8+"];
            const colors2 = dataOptions2.map(option => (option <= percentileThreshold ? '#3498db' : '#e74c3c'));


            // Create the bar chart with Chart.js
            myBarChart3 = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['0', '1', '2', '3', '4', '5','6','7','8+'],
                    datasets: [{
                        label: 'Responses',
                        data: [dataRooms0, dataRooms1, dataRooms2, dataRooms3, dataRooms4, dataRooms5, dataRooms6, dataRooms7, dataRooms8Plus],
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

            var cell = document.getElementById("femaleTotalNr");
            cell.innerHTML = ("Naisi: "+dataMaleFemale);
            var cell = document.getElementById("femaleInstagram");
            cell.innerHTML = (femaleInst+" - "+((femaleInst/dataMaleFemale)*100).toFixed(0)+"%");
            var cell = document.getElementById("femaleTikTok");
            cell.innerHTML = (femaleTik+" - "+((femaleTik/dataMaleFemale)*100).toFixed(0)+"%");
            var cell = document.getElementById("femaleX");
            cell.innerHTML = (femaleTwi+" - "+((femaleTwi/dataMaleFemale)*100).toFixed(0)+"%");
            var cell = document.getElementById("femaleMeta");
            cell.innerHTML = (femaleFace+" - "+((femaleFace/dataMaleFemale)*100).toFixed(0)+"%");
            var cell = document.getElementById("femaleElse");
            cell.innerHTML = (femaleEls+" - "+((femaleEls/dataMaleFemale)*100).toFixed(0)+"%");

            var cell = document.getElementById("maleTotalNr");
            cell.innerHTML = ("Mehi: "+(dataKokku - dataMaleFemale));
            var cell = document.getElementById("maleInstagram");
            cell.innerHTML = (maleInst+" - "+((maleInst/(dataKokku - dataMaleFemale))*100).toFixed(0)+"%");
            var cell = document.getElementById("maleTikTok");
            cell.innerHTML = (maleTik+" - "+((maleTik/(dataKokku - dataMaleFemale))*100).toFixed(0)+"%");
            var cell = document.getElementById("maleX");
            cell.innerHTML = (maleTwi+" - "+((maleTwi/(dataKokku - dataMaleFemale))*100).toFixed(0)+"%");
            var cell = document.getElementById("maleMeta");
            cell.innerHTML = (maleFace+" - "+((maleFace/(dataKokku - dataMaleFemale))*100).toFixed(0)+"%");
            var cell = document.getElementById("maleElse");
            cell.innerHTML = (maleEls+" - "+((maleEls/(dataKokku - dataMaleFemale))*100).toFixed(0)+"%");

            const canvas4 = document.getElementById('myPieChart4');
            const ctx4 = canvas4.getContext('2d');
            ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
            const percentage7 = dataKokku-dataSocialMedia;
            const percentage8 = dataSocialMedia;
            const data4 = [percentage7, percentage8];

            // Define labels and separate colors for pie chart and legend
            const labels4 = ['Instagram / Tik-Tok', 'Muu'];
            const pieColors4 = ['#3498db', '#e74c3c']; // Blue for Category 1, Red for Category 2 in the pie chart
            const legendColors4 = ['#e74c3c', '#3498db']; // Red for Category 1, Blue for Category 2 in the legend

            const total4 = data4.reduce((a, b) => a + b, 0);
            let currentAngle4 = 0;

            // Draw the pie chart with swapped colors
            data4.forEach((percentage, index) => {
                const sliceAngle4 = (percentage / total4) * 2 * Math.PI;
                ctx4.beginPath();
                ctx4.moveTo(75, 75); // Move to the center of the canvas
                ctx4.arc(75, 75, 50, currentAngle4, currentAngle4 + sliceAngle4);
                ctx4.closePath();
                ctx4.fillStyle = pieColors4[index];
                ctx4.fill();

                currentAngle4 += sliceAngle4;
            });

            // Add legend with consistent colors
            const legendX4 = 160; // Position of the legend
            let legendY4 = 20;

            labels4.forEach((label, index) => {
                ctx4.fillStyle = legendColors4[index];
                ctx4.fillRect(legendX4, legendY4, 10, 10); // Color box
                ctx4.fillStyle = '#000'; // Text color
                ctx4.font = '12px Arial';
                ctx4.fillText(label, legendX4 + 20, legendY4 + 10); // Label text

                legendY4 += 20; // Move to the next legend item
            });

            
            var cell = document.getElementById("cell5");
            cell.innerHTML = 'Kokku küsimusi: '+ dataKokku*4 + '<br>Olulisi tulemusi: ' + (dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia);

            const canvas5 = document.getElementById('myPieChart5');
            const ctx5 = canvas5.getContext('2d');
            ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
            const percentage9 = dataKokku*4-(dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia);
            const percentage10 =dataMaleFemale+dataWorkSatisfaction+dataRoomsInt+dataSocialMedia ;
            const data5 = [percentage9, percentage10];
            const total5 = data5.reduce((a, b) => a + b, 0);

            // Define labels and separate colors for pie chart and legend
            const labels5 = ['Olulised andmed', 'Mitteolulised andmed'];
            const pieColors5 = ['#3498db', '#e74c3c']; // Blue for Category 1, Red for Category 2 in the pie chart
            const legendColors5 = ['#e74c3c', '#3498db']; // Red for Category 1, Blue for Category 2 in the legend

            let currentAngle5 = 0;

            // Draw the pie chart with swapped colors
            data5.forEach((percentage, index) => {
                const sliceAngle5 = (percentage / total5) * 2 * Math.PI;
                ctx5.beginPath();
                ctx5.moveTo(75, 75); // Move to the center of the canvas
                ctx5.arc(75, 75, 50, currentAngle5, currentAngle5 + sliceAngle5);
                ctx5.closePath();
                ctx5.fillStyle = pieColors5[index];
                ctx5.fill();

                currentAngle5 += sliceAngle5;
            });

            // Add legend with consistent colors
            const legendX5 = 160; // Position of the legend
            let legendY5 = 20;

            labels5.forEach((label, index) => {
                ctx5.fillStyle = legendColors5[index];
                ctx5.fillRect(legendX5, legendY5, 10, 10); // Color box
                ctx5.fillStyle = '#000'; // Text color
                ctx5.font = '12px Arial';
                ctx5.fillText(label, legendX5 + 20, legendY5 + 10); // Label text

                legendY5 += 20; // Move to the next legend item
            });

            var cell = document.getElementById("cell6");
            var totalToPercent=Math.round((percentage10*100)/(percentage9+percentage10));
            var totalToPercentNegative=100-totalToPercent;
            cell.innerHTML = "Pareto Printsiip kehtib nende andmete põhjal seosega: <b>"+totalToPercentNegative+"%-"+totalToPercent+"%</b>";
        
        } else {
            alert('Please enter a valid positive number.');
        }

        

        
    });
});



