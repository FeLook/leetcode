/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-16 00:45:47
 * @LastEditTime: 2021-03-16 22:37:27
 */
/**
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回""
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * "dog","racecar","car"]
 * ""
 */

function longestCommonPrefix(arr) {
  let str = ''
  if (!arr.length) return str
  if (arr.length === 1) return arr[0]
  let flag = true
  for (let j = 0; j < arr[0].length; j++) {
    let val = arr[0].charAt(j)
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].charAt(j) !== val) {
        flag = false
        break
      }
      if (flag && i === arr.length - 1) {
        str = str + val 
      }
    }
    if (!flag) {
      break
    }
  }
  return str
}

console.log('x', longestCommonPrefix(["flower","flow","flight"]))
console.log('x', longestCommonPrefix(["dog","racecar","car"]))