/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i;
    }
  }
  return -1;
};

// 用了indexOf 和lastIndexOf了，再想想