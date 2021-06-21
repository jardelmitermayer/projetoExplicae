function transformNumbers (num) {
  if(num<10){
    return `0${String(num)}`
  } else {
    return String(num);
  }
} 

function createTable (line, column) {
  let count = 1;
  const table = document.createElement("table");

  const raffleNumbers = randomNumbers();
 
  for(let i = 0; i < line;i++){
    let line = document.createElement("tr");
    table.appendChild(line);
    for (let j=0; j < column; j++){
      let column = document.createElement("td")
      if(raffleNumbers.includes(count)){
        let number = transformNumbers(count);
        column.setAttribute('id', 'sorteado')   
        column.innerText = number;
      }else {
        let number = transformNumbers(count);
        column.innerText = number;
      }
      line.appendChild(column)
      count++;
    }
  }
  return table
}