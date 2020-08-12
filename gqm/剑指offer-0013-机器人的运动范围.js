/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，
 * 因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  //求位数和
  let Sum = (x) => (x % 10) + Math.floor(x / 10);
  let flag = [];
  //判断当前位置是否满足条件，满足就标记为true
  function judeg(i, j, m, n, k, flag) {
    if (
      i < 0 ||
      j < 0 ||
      i > m - 1 ||
      j > n - 1 ||
      Sum(i) + Sum(j) > k ||
      flag[i * n + j] == true
    ) {
      return;
    }
    flag[i * n + j] = true;
    judeg(i - 1, j, m, n, k, flag);
    judeg(i + 1, j, m, n, k, flag);
    judeg(i, j - 1, m, n, k, flag);
    judeg(i, j + 1, m, n, k, flag);
  }
  //从第一个位置开始判断
  judeg(0, 0, m, n, k, flag);
  return flag.filter((item) => item == true).length;
};
