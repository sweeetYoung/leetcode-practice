
function bubbleSort(numArray) {
  if (!numArray) {
    return [];
  }
  for (let i = 0; i < numArray.length - 1; i++) {
    for (let j = 0; j < numArray.length - 1 - i; j++) {
      if (numArray[j] > numArray[j + 1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
  }
  return numArray;
}


let data = [1,5,3,2,7,4,6,9];
console.log(bubbleSort(null))