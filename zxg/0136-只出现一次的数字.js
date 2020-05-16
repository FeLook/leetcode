/**
 * 只出现一次的数字 https://leetcode-cn.com/problems/single-number/
 * 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 输入: [2,2,1]
 * 输出: 1
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber2 = (nums) => {
  return nums.reduce((pre, next) => {
    return pre ^ next;
  });
};

console.log('result', singleNumber2([1, 2, 2, 3, 3]));
console.log('result', singleNumber2([2, 1, 2, 3, 3]));
console.log('result', singleNumber2([2, 2, 1, 3, 3]));
console.log('result', singleNumber2([2, 2, 3, 3, 1]));


/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = (nums) => {
  return nums.reduce((pre, next, index, arr) => {
    if (pre.hasOwnProperty(next)) {
      delete pre[next];
      return arr.length - 1 === index ? Object.keys(pre)[0] : pre;
    } else {
      pre[next] = next;
      return arr.length - 1 === index ? Object.keys(pre)[0] : pre;
    }
  }, {});
};

console.log('result', singleNumber([1, 2, 2, 3, 3]));
console.log('result', singleNumber([2, 1, 2, 3, 3]));
console.log('result', singleNumber([2, 2, 1, 3, 3]));
console.log('result', singleNumber([2, 2, 3, 3, 1]));
