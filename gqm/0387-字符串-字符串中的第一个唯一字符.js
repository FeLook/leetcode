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
 * @param {string} str
 * @return {number}
 */
const firstUniqChar = function (str) {
  let arr = {},
    key;
  for (let i in str) {
    key = str[i];
    if (arr[key] >= 1) {
      arr[key] += 1;
    } else {
      arr[key] = 1;
    }
  }
  for (let j in str) {
    if (arr[str[j]] == 1) {
      return parseInt(j);
    }
  }
  return -1;
};

console.log(firstUniqChar("lallll"));
