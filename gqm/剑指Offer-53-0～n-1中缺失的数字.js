/** 
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 输入: [0,1,3]
 * 输出: 2
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  if (nums.length <= 1) return Math.abs((+nums.toString()) - 1)
  if (nums.length !== nums[nums.length - 1]) return nums.length
  if (nums.length === nums[nums.length - 1] && nums[0] !== 0) return 0
  const filters =  nums.filter((item,index) =>  index !== nums.length - 1 && item + 1 !== nums[index + 1])
  return (+filters.toString()) + 1
};

console.log(missingNumber([0,1,2,3,4,5,6,7,9]))
console.log(missingNumber([0]))
console.log(missingNumber([0,1]))


const missingNumber1 = (nums) => {
  let min = 0, max = nums.length - 1;
  while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      if (nums[mid] === mid) {
          min = mid + 1;
      } else {
          max = mid - 1;
      }
  }
  return min;
};

console.log(missingNumber1([0,1,2,3,4,5,6,7,9]))
console.log(missingNumber1([0]))
console.log(missingNumber1([0,1]))