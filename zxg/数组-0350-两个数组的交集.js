
/**
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 
 * 输出: [2,2]
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  输出: [4,9]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  nums1 = Array.from(new Set(nums2))
  return nums1.filter(item => nums2.includes(item))
}