function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumbers() {
  const ArrayRaffleNumbers = new Array();
  while(ArrayRaffleNumbers.length < 6){
    let number = getRandomIntInclusive(1,60);
    ArrayRaffleNumbers.push(number)
  }
  return ArrayRaffleNumbers;
}