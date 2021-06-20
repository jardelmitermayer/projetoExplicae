function createTable (line, column) {
  const table = document.createElement("table");
  for(let i = 0; i < line;i++){
    let line = document.createElement("tr");
    table.appendChild(line);
    for (let j=0; j < column; j++){
      let column = document.createElement("td")
    }
  }
}