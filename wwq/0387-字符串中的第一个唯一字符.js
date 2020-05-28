var firstUniqChar = function(s) {
  const obj = {};
  const repeat = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined && repeat[s[i]] === undefined) {
      obj[s[i]] = i;
    } else if (obj[s[i]] !== undefined && repeat[s[i]] === undefined) {
      delete obj[s[i]];
      repeat[s[i]] = i;
    }
  }
  const arr = Object.keys(obj);
  return arr.length > 0 ? +obj[arr[0]] : -1;
};
