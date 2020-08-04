/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，
 * 我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
 * 输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 */

const minArray = (numbers) => {
  if (!numbers.length) return 0;
  // Math.min.apply(null, arr) 效果等价于 直接解构
  return Math.min(...numbers);
};

const minArr1 = (numbers) => {
  if (!numbers.length) return 0;
  let len = Math.floor(numbers.length / 2)
  let min = numbers[len]
  // 循环一半，通过 Math.min 可以找到最小的值
  for (let i = 0; i < len; i++) {
    min = Math.min(min, numbers[i], numbers[numbers.length - 1 - i]);
  }
  return min;
};

console.log(minArr1([5,4,3,2,1]))
console.log(minArr1([5,4,4,2,2]))
