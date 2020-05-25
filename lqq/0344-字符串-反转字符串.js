/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // return s.reverse();
  const len = s.length;
  for(let i = 0; i < Math.floor(len / 2) ; i++){
     let temp = s[i];
     s[i] = s[len - i - 1];
     s[len - i - 1] = temp;
  }
  return s;
};