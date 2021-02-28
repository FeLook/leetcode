/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-01-04 18:51:42
 * @LastEditTime: 2021-01-05 17:46:08
 */


// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
/***
 *
 *
  m == matrix.length
  n == matrix[i].length
  1 <= n, m <= 300
  -109 <= matix[i][j] <= 109
  每行的所有元素从左到右升序排列
  每列的所有元素从上到下升序排列
  -109 <= target <= 109
 */


const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
const target = 5;

const searchMatrix = function (matrix, target) {
  const maxX = matrix[0].length;
  let maxY = matrix.length;
  for (let index = maxY; index < maxY; index--) {
    if (matrix[index][0] <= target) {
      maxY = index
    }
  }
  
};