var strStr = function(haystack, needle) {
  // return haystack.indexOf(needle)
  if (!haystack && !needle) return 0;
  if (!needle) return 0;
  const len = needle.length;
  const first = needle[0];
  for (let i = 0; i < haystack.length; i++) {
    const str = haystack[i];
    if (str === first && haystack.substr(i, len) === needle) {
      return i;
    }
  }
  return -1;
};
