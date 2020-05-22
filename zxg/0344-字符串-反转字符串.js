/****
 * 
 * 
  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

  示例 1：

  输入：["h","e","l","l","o"]
  输出：["o","l","l","e","h"]
  示例 2：

  输入：["H","a","n","n","a","h"]
  输出：["h","a","n","n","a","H"]

 */


var reverseString = function (arr) {
  for (let i = 0, len = arr.length; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }
  return arr;
};

console.log(reverseString([1, 2, 3, 4, 5]));
console.log(reverseString([1, 2, 3, 4, 5, 6]));


var reverseString2 = function (s) {
  return s.reverse();
};

console.log(reverseString2([1, 2, 3, 3, 4]));

