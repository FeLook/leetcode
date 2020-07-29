/**
 * 统计一个数字在排序数组中出现的次数。
示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：

0 <= 数组长度 <= 50000
 */

// 循环全部
const statistics = (nums, target) => {
  if (!nums.length) return 0
  return nums.filter(item => item === target).length
}

// 循环部分
const statistics1 = (nums, target) => {
  if (!nums.length) return 0
  let sum = 0
  for(let i = 0; i < nums.length; i++){
    if (nums[i] === target && nums[i + 1] !== target) {
      sum += 1;
      break;
    }else if(nums[i] === target && nums[i + 1] === target){
      sum += 1;
    }
  }
  return sum
}

// 最后出现的减去最先出现的
const statistics2 = (nums, target) => {
  if (!nums.length || nums.indexOf(target) === -1) return 0
  return nums.lastIndexOf(target) - nums.indexOf(target) + 1
}

const arr = [5,7,7,8,8,10]
console.log(statistics(arr, 8))
console.log(statistics(arr, 10))

console.log(statistics1(arr, 8))
console.log(statistics1(arr, 10))
console.log(statistics1(arr, 5))
console.log(statistics1(arr, 6))


console.log(statistics2(arr, 8))
console.log(statistics2(arr, 10))
console.log(statistics2(arr, 5))
console.log(statistics2(arr, 6))