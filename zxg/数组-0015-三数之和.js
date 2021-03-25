/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-18 15:30:48
 * @LastEditTime: 2021-03-26 00:51:13
 */
/**
 * 
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
 * 
 * 
 */
const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const res = [],
    len = nums.length
  for (let i = 0; i < len - 2; i++) {
    const v1 = nums[i];
    if (v1 === nums[i - 1]) {
      continue
    }
    let left = i + 1;
    let right = len -1
    while(left < right) {
      const v2 = nums[left];
      const v3 = nums[right];
      if (v1 + v2 + v3 > 0) {
        right--;
      } else if (v1 + v2 + v3 < 0) {
        left++;
      } else {
        res.push([v1, v2, v3])
        while(v2 === nums[left+1]) {
          left++
        }
        while(v3 === nums[right-1]) {
          right--
        }
        left++;
        right--;
      }
    }
  }
  return res
}

console.log('x', threeSum([1, 2, 3, -1, -2, -3]))
// console.log('x', threeSum([-1, 0, 1, 2, -1, -4]))
console.log('x', threeSum([-1, 0, 1, 2, -1, -4]))
console.log('x', threeSum([0,0,0,0]))




