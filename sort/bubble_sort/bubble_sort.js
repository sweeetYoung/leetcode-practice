/**
 * 冒泡排序
 * @param numArray
 * @returns {*[]|*}
 */
function bubbleSort(numArray) {
  if (!numArray) {
    return [];
  }
  for (let i = 0; i < numArray.length - 1; i++) {
    for (let j = 0; j < numArray.length - 1 - i; j++) {
      console.log('每一项', i, j, j+1)
      if (numArray[j] > numArray[j + 1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
      console.log('结果',numArray)
    }
  }
  return numArray;
  // 0.47s
}

function bubbleSortShort(arr) {
  let min = 0, max = arr.length - 1; // 先设定出最小值和最大值,最大值为数组最后一项
  // 先正向遍历找到最大值
  while (min < max) {
    console.log('-',min,max)
    for (let i = min; i < max; i++) {
      console.log('正向',i,i+1)
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
      console.log('正向结果',arr)
    }
    max--;
    console.log(max, min);
    for (let i = max; i > min; i--) {
      console.log('反向',i,i-1)
      if (arr[i] < arr[i-1]) {
        [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
      }
      console.log('反向结果',arr)
    }
    min++;
    console.log(min,max);
  }
  return arr;
}

let data = [1,5,3,2,7,4,6,9];
console.log(bubbleSortShort(data))