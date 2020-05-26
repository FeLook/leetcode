// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

/**
 * @param {string} 
 * @return {boolean}
 */

var isPalindrome = function(s) {
  const arr = s.toLowerCase().match(/[A-Za-z0-9]/g);
  let isH = true;
  if(arr && arr.length > 0) {
    let i = 0;
    while(i < Math.floor(arr.length/2 )) {
      if(arr[i] !== arr[arr.length - (i+1)]) {
         isH = false
      }
      i++;
    }
  }
  return isH;
};
