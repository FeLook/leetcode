/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-29 15:19:28
 * @LastEditTime: 2021-07-05 11:48:03
 */
/**
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * [-2,1,-3,4,-1,2,1,-5,4],
 * 
 * [-2,6,-3,4,-1,2,1,-5,4],
 */

/**
 * https://www.geekxh.com/1.2.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/202.html#_03%E3%80%81go%E8%AF%AD%E8%A8%80%E7%A4%BA%E4%BE%8B
 * 
 * @param {*} nums 
 * @returns 
 */
const maxSubArray = function (nums) {
  let result = nums[0];
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
  result = Math.max(dp[i], result)
  }
  return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,6,-3,4,-1,2,1,-5,4]));

const maxSubArray1 = function (nums) {
  let sum = nums[0];
  let n = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (n > 0) n += nums[i]; // 判断中间值是否大于0
    else n = nums[i];
    if (sum < n) sum = n; // 相加后的值和最大值作比较
  }
  return sum;
};

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray1([-2,6,-3,4,-1,2,1,-5,4]));