// 栈
var backspaceCompare = function(S, T) {
  S = S.split("");
  T = T.split("");
  let a = [];
  let b = [];
  S.forEach((val, i) => {
    if (val !== "#") {
      a.push(val);
    } else {
      a.pop();
    }
  });
  T.forEach((val, i) => {
    if (val !== "#") {
      b.push(val);
    } else {
      b.pop();
    }
  });
  return a.join("") === b.join("");
};
