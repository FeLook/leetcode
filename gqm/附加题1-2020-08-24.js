/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
示例 1：

输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
示例 2：

输入：[[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
 */

const rotate =  (matrix) => {
  const allLength = matrix.length;
  const oneLength = matrix[0].length;
  let arr = []
  for (let i = 0; i < oneLength; i++) {
    arr[i] = []
    for (let j = 0; j < allLength; j++) {
      arr[i][j] = matrix[j][i]
    }
  }
  return arr;
};
const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const b = [
  [1,2,3],
  [4,5,6]
]
console.log(rotate(a));
console.log((rotate(b)))