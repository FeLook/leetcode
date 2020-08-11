/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

const lengthOfLongestSubstring = (s) => {
  let max = 1;
  let length = s.length;
  if(length <= 1) return length;
  let head = 0, record = 1, index = -1;
  while(record < length) {
      index = s.substring(head, record).indexOf(s[record]);
      if(index != -1 && head < record) {
          head += index+1;
          record++;
      }else {
          record++;
          if(record - head > max) { max = record - head; }
      }
  }
  return max;
}
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbbbb'))
