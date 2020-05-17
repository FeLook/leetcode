var arr = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
for (let i = 0; i < arr[0].length; i++) {
  if (arr[0][i] !== 1) {
    arr[0][i] = "1";
  } else {
    break;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] !== 1) {
    arr[i][0] = "1";
  } else {
    break;
  }
}
console.log(arr);
for (let i = 1; i < arr.length; i++) {
  let temp = arr[i];
  for (let j = 1; j < temp.length; j++) {
    if (arr[i][j] !== 1) {
      arr[i][j] =
        "" +
        (Number(arr[i][j - 1] === 1 ? 0 : arr[i][j - 1]) +
          Number(arr[i - 1][j] === 1 ? 0 : arr[i - 1][j]));
    }
  }
}
var last = arr[arr.length - 1];
console.log(arr, +last[last.length - 1]);

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  let arr = obstacleGrid;
  let len = arr.length;
  if (arr[len - 1][arr[len - 1].length - 1] === 1) return 0;
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] !== 1) {
      arr[0][i] = "1";
    } else {
      if (arr.length === 1) return 0;
      break;
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[i][0] !== 1) {
      arr[i][0] = "1";
    } else {
      if (arr[i].length === 1) return 0;
      break;
    }
  }

  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    for (let j = 1; j < temp.length; j++) {
      if (arr[i][j] !== 1) {
        arr[i][j] =
          "" +
          (Number(arr[i][j - 1] === 1 ? 0 : arr[i][j - 1]) +
            Number(arr[i - 1][j] === 1 ? 0 : arr[i - 1][j]));
      }
    }
  }
  var last = arr[len - 1];
  return +last[last.length - 1];
};
// 递推公式为  arr[i][j] = arr[i][j - 1] + arr[i - 1][j];要算最短路径可以得出到上面和左边的总的路径树，遇到障碍需要单独处理
