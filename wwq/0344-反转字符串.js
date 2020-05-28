var reverseString = function(s) {
  // return s.reverse()
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    // const value = s[start] ;
    // s[start] = s[end];
    // s[end] = value;
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
};
