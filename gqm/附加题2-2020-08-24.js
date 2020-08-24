/**
 * 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。
  目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，
  最多能让1个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能
  让2个孩子满足。
 */

const getCookies = (friends, cookies) => {
  let sums = 0;
  while (cookies.length) {
    const i = friends.indexOf(cookies[0]);
    if (i !== -1) sums += 1;
    friends.splice(i, 1);
    cookies.splice(0, 1);
  }
  return sums;
};

console.log(getCookies([1, 3, 5, 4, 2], [1, 1]));
console.log(getCookies([10, 9, 8, 7, 6], [7, 6, 5]));
