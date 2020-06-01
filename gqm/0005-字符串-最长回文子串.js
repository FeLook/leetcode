/*
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *   示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *   示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 */

const longestPalindrome =  (s) => {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const temp = s.slice(i, j);
      if (
        temp === temp.split("").reverse().join("") &&
        temp.length > str.length
      ) {
        str = temp;
      }
    }
  }
  return str;
};

console.log(longestPalindrome('babad'))