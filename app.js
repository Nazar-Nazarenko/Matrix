const startButton = document.querySelector(".open");
const myTable = document.querySelector("#table");

let n = 4;
let m = 2;

let masArray = [];

callTable();

function callTable() {
    for (let i = 0; i <= m; i++) {
        let sellSum = 0;
        masArray[i] = [];

        for (let j = 0; j <= n; j++) {

            masArray[i][j] = Math.floor(Math.random() * 30 + 100);
            if (j === n) {
                masArray[i][j] = sellSum;
            } else {
                sellSum += masArray[i][j];
            }
        }

    }
    sumColumn();
}

function sumColumn() {
    for (let j = 0; j <= n; j++) {
        let sellSum = 0;
        for (let i = 0; i <= m; i++) {

            if (i === m) {
                masArray[i][j] = sellSum;
            } else {
                sellSum += masArray[i][j] / m;
            }
        }

    }
}


startButton.addEventListener('click', () => {
    openTable();
    startButton.remove();

});
function openTable() {
    const table = document.createElement('table');
    masArray.forEach(rowValues => {
        const row = document.createElement('tr');

        rowValues.forEach(cellValue => {
            const cell = document.createElement('td');
            cell.innerText = cellValue;
            row.appendChild(cell);
            cell.addEventListener('click', handleCellClick);
            });


        table.appendChild(row);
    });

    myTable.appendChild(table);

}


function  handleCellClick() {

    ++this.innerText;

    const cellList =this.parentElement.querySelectorAll('td');
    const lastCell = cellList[cellList.length - 1];

    lastCell.innerText++;

}
