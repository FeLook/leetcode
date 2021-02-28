/****
 * 
  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。

  示例 1:

  输入: ["flower","flow","flight"]
  输出: "fl"
  示例 2:

  输入: ["dog","racecar","car"]
  输出: ""
  解释: 输入不存在公共前缀。
  说明:

  所有输入只包含小写字母 a-z 。

  通过次数254,013提交次数6

 */


/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  const fistVal = strs[0];
  if (!strs.length === 1) return fistVal;

  let flag = true;
  let nIndex = 0;
  
  while (flag) {
    // 第一个的每一个值
    const sFirstValueChar = fistVal.substr(nIndex, 1);
    if (fistVal.length > nIndex) {
      for (let j = 0; j < strs.length; j++) {
        const sChar = strs[j].substr(nIndex, 1);
        // 判断每一个值是否相等
        if (!sChar || sChar !== sFirstValueChar) {
          flag = false;
          break;
        }
      };
    } else {
      flag = false;
    }
    nIndex++;
  }
  return fistVal.substr(0, nIndex - 1);
};


console.log('result', longestCommonPrefix(["flower","flow","flight"]));
console.log('result', longestCommonPrefix(["dog","racecar","car"]));
console.log('result', longestCommonPrefix(["aa","a"]));