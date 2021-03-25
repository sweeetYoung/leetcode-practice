/**
 * 在不改变每列数据顺序的前提下，输出最大整数
 * @param nums
 * @returns {string}
 */
function largestNumber(nums) {
  let newArr = [];
  for (let index in nums) {
    newArr.push(nums[index].toString());
  }
  newArr.sort(function (a,b){
    return (a + b) - (b + a);
  })
  newArr.reverse();
  let res = newArr.join('');
  if (res[0] === '0') {
    return "0"
  }
  return res;
}

let nums = [3,30,34,5,9]
console.log(largestNumber(nums));