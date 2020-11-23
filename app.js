let getButton = document.querySelector(".open");
let myTable = document.querySelector("#table");

let n = 4;
let m = 2;


let masArray = [];

for (let i = 0; i <= m; i++) {
    let sellSum = 0;
    masArray[i] = [];

    for (let j = 0; j <= n; j++) {

        masArray[i][j] = Math.floor(Math.random() * 30 + 100);
        j === n ? masArray[i][j] = sellSum : sellSum += masArray[i][j];
        // i === m ? masArray[j][i] = sellSum : sellSum += masArray[j][i] / m;
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


