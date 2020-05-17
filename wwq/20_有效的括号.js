var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length % 2 === 1) return false;
  let obj = { "]": "[", "}": "{", ")": "(" };
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      arr.push(s[i]);
    } else if (arr.pop() !== obj[s[i]]) {
      return false;
    }
  }
  if (arr.length > 0) return false;
  return true;
};
