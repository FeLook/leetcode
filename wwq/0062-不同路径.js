var uniquePaths = function(m, n) {
  if (m === 0 && n === 0) return 0;
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }
  let len = arr.length;
  for (let i = 0; i < arr[0].length; i++) {
    arr[0][i] = 1;
  }
  for (let i = 0; i < len; i++) {
    arr[i][0] = 1;
  }

  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    for (let j = 1; j < temp.length; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
    }
  }
  var last = arr[len - 1];
  return last[last.length - 1];
};
// 状态转移方程 arr[i][j - 1] + arr[i - 1][j]
