/****
 *
 *  编写一个函数来查找字符串数组中的最长公共前缀。
 *  如果不存在公共前缀，返回空字符串 ""。
 *    示例 1:
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 *    示例 2:
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀。
 *  说明:
 *  所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let newArr = strs.length > 0 ? String(strs[0]).split("") : false;
  let a = "";
  if (!newArr) {
    return a;
  }
  for (let i = 0; i < newArr.length; i++) {
    let num = 0;
    strs.map((da) => {
      da.charAt(i) == newArr[i] ? num++ : null;
    });
    if (num === strs.length) {
      a = a + newArr[i];
    } else {
      break;
    }
  }
  return a;
};

console.log("result", longestCommonPrefix(["dog", "racecar", "car"]));
