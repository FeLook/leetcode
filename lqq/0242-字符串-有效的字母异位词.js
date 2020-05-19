// 题目：
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false;
  }
  const newS = s.split('').sort();
  const newT = t.split('').sort();
  for(let i = 0; i< newS.length; i++){
    if(newS[i] !== newT[i]){
      console.log(i);
      return false;
    }
  }
  return true;
};


console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));