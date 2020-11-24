let getButton = document.querySelector(".open");
let myTable = document.querySelector("#table");

let n = 4;
let m = 2;


let masArray = [];

callTable();

function callTable() {
    for (let i = 0; i <= m; i++) {
        let sellSum = 0;
        masArray[i] = [];

        for (let j = 0; j <= n; j++) {

            let result = masArray[i][j] = Math.floor(Math.random() * 30 + 100);
            console.log(result);
            j === n ? masArray[i][j] = sellSum : sellSum += masArray[i][j];
        }

    }
    cellCall();
}

function cellCall() {
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


getButton.addEventListener('click', () => {
    let table = document.createElement('table');
    masArray.forEach(int => {
        let row = document.createElement('tr');

        Object.values(int).forEach(text => {
            let cell = document.createElement('td');
            cell.innerText = text + '';
            row.appendChild(cell);
        })
        table.appendChild(row);
    });

    myTable.appendChild(table);

});


