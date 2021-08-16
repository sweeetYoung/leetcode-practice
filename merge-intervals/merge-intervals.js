/**
 * 合并区间
 * @param intervals
 * @returns {*[]}
 */

function merge(intervals) {
  // 如果传参数组长度为0，则返回空数组
  if (intervals.length === 0) {
    return [];
  }
  // 声明一个放最后返回的数组
  let res = [];
  // 将传进来的数组根据每项左端数字进行升序排序 并把左端最小的数组放进返回数组中
  intervals.sort(function(a,b){
    return a[0] - b[0];
  })
  console.log(intervals);
  res.push(intervals[0]);
  console.log(res);
  // 对排好序的数组进行遍历
  for (let i = 0; i < intervals.length; i++) {
    // 如果遍历到的当前区间左端点大于res数组最后一个区间的右端点 则他们不重叠 可以将此区间push进res数组
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else {
      // 当前遍历到的区间右端点小于res数组最后一个区间的右端点 区间已重叠 需要将res数组最后区间的右端点进行替换
      if (intervals[i][1] > res[res.length - 1][1]) {
        res[res.length - 1][1] = intervals[i][1];
      }
    }
  }
  return res;
}

let intervals = [[1,5], [3,6], [2,9],[10,15]]
console.log(merge(intervals))