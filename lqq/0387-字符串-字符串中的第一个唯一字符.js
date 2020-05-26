/**
 * @param {string} s
 * @return {number}
 */
// const firstUniqChar = function(s) {
//   for(let i = 0; i < s.length; i++) {
//     if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
//       return i;
//     }
//   }
//   return -1;
// };

// 用了indexOf 和lastIndexOf了，再想想

// 方式二 哈希 
const firstUniqChar = function(s) {
  const hashObj = {};
  for (let i = 0; i< s.length; i++) {
      if(!hashObj[s[i]]){
          hashObj[s[i]] = 1
      } else {
          hashObj[s[i]] += 1;
      }
  }

  for(let j = 0; j< s.length; j++) {
      if(hashObj[s[j]] === 1){
          return j;
      }
  }

  return -1;
};