var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let s = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const item = strs[i];
    if (s === "") {
      break;
    }
    let len = s.length > item.length ? s.length : item.length;
    for (let j = 0; j <= len; j++) {
      if (item.substr(0, j) !== s.substr(0, j)) {
        s = s.substr(0, j - 1);
        break;
      }
    }
  }
  return s;
};
