/**
 * 输入一个整数数组，
 * 实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = (nums) => {

  function recordSort(a, b){
    if (a % 2 == 0) return 1
    if (b % 2 == 0) return -1
  }

  return nums.sort(recordSort)
};

var exchange1 = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  while(i < j) {
      while( nums[i]%2 ) {
          i++
      }
      while( nums[j]%2 == 0 ) {
          j--
      }
      if (i < j) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
      }
  } 
  return nums
};


console.log(exchange([1,2,3,4]))
console.log(exchange1([1,2,3,4]))