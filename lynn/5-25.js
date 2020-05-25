
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let i = [];
  s.split('').forEach((item,index)=> {
  if(s.indexOf(item) === s.lastIndexOf(item)) {
      i.push(index)
    }
  });
return i.length > 0 ?i[0] :-1;
};
