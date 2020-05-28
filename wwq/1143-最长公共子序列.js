/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let a = text1.split("");
  let b = text2.split("");
  let n = a.length;
  let m = b.length;
  let states = [];
  // n行 m列
  for (let i = 0; i < n; i++) {
    states[i] = [];
    for (let j = 0; j < m; j++) {
      states[i][j] = 0;
    }
  }

  for (let i = 0; i < m; i++) {
    if (a[0] === b[i]) {
      states[0][i] = 1; // i
    } else if (i !== 0) {
      states[0][i] = states[0][i - 1];
    } else {
      states[0][i] = 0;
    }
  }
  for (let i = 0; i < n; i++) {
    if (a[i] === b[0]) {
      states[i][0] = 1; // i
    } else if (i !== 0) {
      states[i][0] = states[i - 1][0];
    } else {
      states[i][0] = 0;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (a[i] === b[j]) {
        states[i][j] = Math.max.call(
          null,
          states[i - 1][j],
          states[i][j - 1],
          states[i - 1][j - 1] + 1
        );
      } else {
        states[i][j] = Math.max.call(
          null,
          states[i - 1][j],
          states[i][j - 1],
          states[i - 1][j - 1]
        );
      }
    }
  }
  // console.log(states);
  return states[n - 1][m - 1];
};
