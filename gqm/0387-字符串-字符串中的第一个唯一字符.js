/****
 * 
  给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

  案例:

  s = "leetcode"
  返回 0.

  s = "loveleetcode",
  返回 2.

 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (str) {
  if (!str.length) return -1;
  let oMap = new Map();

  for (const v of str) {
    let val = oMap.get(v) || 0;
    oMap.set(v, ++val)
  }

  for (const [key, value] of oMap) {
    if (value === 1) {
      return str.indexOf(key)
    }
  }
  return -1;
};

console.log(firstUniqChar('lallll'));




// 用 indexOf  lastIndexOf 处理
const firstUniqChar2 = function (s) {
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};