
let str = "abcabcbb"
function lengthOfLongestSubstring(s) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max)
  }
  return max;
}

console.log(lengthOfLongestSubstring(str))