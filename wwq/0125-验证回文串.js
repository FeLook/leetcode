var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const val = s
    .split("")
    .reverse()
    .join("");
  return val === s;
};
