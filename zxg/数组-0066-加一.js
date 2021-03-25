/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-17 17:35:43
 * @LastEditTime: 2021-03-18 13:53:49
 * 
 * 
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 输入: [1,2,3]
   输出: [1,2,4]
   解释: 输入数组表示数字 123。

  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。
 */

function plusOne(arr) {
  if (!arr.length) return arr
  let add = 1
  for (let i = arr.length - 1; i > -1; i--) {
    const sum = add + arr[i]
    if (sum > 9) {
      arr[i] = sum - 10
      add = 1
    } else {
      arr[i] = sum
      add = 0
    }
  }
  if (add) {
    arr.unshift(add)
  }
  return arr
}
