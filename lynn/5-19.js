/** 
 * 异位词：长度相等，字母个数相同，顺序不同
 * 
*/
var isAnagram = function(s, t) {
   const sArr = s.split().sort();
   const tArr = t.split().sort();
   return sArr.join() === tArr.join();
 };
 