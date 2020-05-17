var climbStairs = function(n) {
  let states = new Array(n + 1);
  states[1] = 1;
  states[2] = 2;
  for (let i = 3; i <= n; i++) {
    states[i] = states[i - 2] + states[i - 1];
  }
  return states[n];
};
