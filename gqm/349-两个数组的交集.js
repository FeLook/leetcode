/**
 * 给定两个数组，
 * 编写一个函数来计算它们的交集。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = Array.from(new Set(nums1))
  return nums1.filter(item => nums2.includes(item))
};

console.log(intersection([1,2,2,1],[2,2] ))
