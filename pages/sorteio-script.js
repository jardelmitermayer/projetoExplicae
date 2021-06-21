const sorteio = document.querySelector('#tabelaDiv');

const lengthTables = document.querySelectorAll('table').length;
console.log(lengthTables)

const table1 = createTable(6,10);
sorteio.appendChild(table1)

const table2 = createTable(6,10);
sorteio.appendChild(table2)

const table3 = createTable(6,10);
  sorteio.appendChild(table3)