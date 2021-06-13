/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-18 22:35:17
 * @LastEditTime: 2021-05-20 13:49:09
 */
/**
 * 
 * 每个物品只有一个
 * 
 * 物品 valList,价值 [1,2,4]
 * 对应
 * 重量 weightList [2,5,7]
 * 
 * 
 * 包可装 10, 最大价值为多少
 * 
 */
 function maxVal(weightList, valList, m) {
  let len1 = weightList.length
  let dp = new Array(m + 1).fill(0)
  // 初始化dp

  for (let i = 1; i <= len1; i++) {
    for (let j = m; j >= 1; j--) {
      if (weightList[i - 1] > j) {
        dp[j] = dp[j]
      } else {
        dp[j] = Math.max(dp[j], dp[j-weightList[i -1]] + valList[i - 1])
      }
    }
  }
  console.log('dp', dp);
  return dp[m]
}
console.log(maxVal([3,2,4], [5,3,6], 5))


function maxVal2(weightList, valList, m) {
  let len1 = weightList.length
  let dp = []
  // 初始化dp
  for (let i = 0; i <= len1; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= m; j++) {
      if (weightList[i - 1] > j) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weightList[i -1]] + valList[i - 1])
      }
    }
  }
  // console.log('dp', dp);
  return dp[len1][m]
}

console.log(maxVal2([3,2,4], [5,3,6], 5))