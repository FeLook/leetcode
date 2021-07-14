/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-07-14 10:56:27
 * @LastEditTime: 2021-07-14 10:56:56
 * 
 * 
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */


function spiralOrder(arr) {
  let i = 0;
  let newArr = []
  while(arr.length) {
    let p = i % 2;
    let q = i % 4;
    if (p === 0) {
      let lArr =  q === 0 ? arr.shift() : arr.pop().reverse();
      newArr = newArr.concat(lArr)
    } else {
      let cArr = []
      for (let i = 0; i < arr.length; i++) {
        if (q === 1) {
          cArr.push(arr[i].pop())
        } else {
          cArr.unshift(arr[i].shift())
        }
      }
      arr = arr.filter(v=>v.length)
      newArr = newArr.concat(cArr)
    }
    i++;
  }
  return newArr
}
