/**
 * 输入一组正整数的数组，求出一个子数组，
 * 子数组当中的元素能够被两两整除，求出一个最长的子数组
 * 即si%sj == 0
 * 比如:
 * 输入[1,2,3]
 * 输出[1,2]或者[1,3]
 */

const searchArr = (nums) => {
  let len = nums.length
  if (len <= 1) return nums

  nums = nums.sort((a, b) => a - b)

  let maxIndex = 0
  let dp = []
  dp[0] = [nums[0]]

  let optionLen, lastItem
  for (let i = 1; i < len; i++) {
    optionLen = dp.length
    for (let j = optionLen - 1; j >= 0; j--) {
      lastItem = dp[j][dp[j].length - 1]
      if (nums[i] % lastItem === 0) { // 符合条件
        if (dp[j].length + 1 >= dp[maxIndex].length) {
          dp.push([...dp[j], nums[i]])
          maxIndex = dp.length - 1
        }
      }
    }

    // 如果没有符合条件的
    if (optionLen === dp.length) {
      dp.push([nums[i]])
    }

  }

  return dp[maxIndex]
};

console.log(searchArr([1,2,3]))
