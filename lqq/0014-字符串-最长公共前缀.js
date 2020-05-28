/***
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。 
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
function compare(strs) {
    if (!strs.length) return '';
      if (strs.length === 1) return strs.toString();
      let s = '', s1 = strs[0], s2 = strs[1];
      
      for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
          break;
        }
        s += s1[i];
        
      }
    let newStrs = strs.slice(2);
    newStrs.unshift(s);
    return compare(newStrs);
}
  
const longestCommonPrefix = function(strs) {
    return compare(strs);
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["aba","cca"]))

// 两两比较，得到公共的，然后剔除原数组已经比较过的两个元素，加入这个公共的，依次类推