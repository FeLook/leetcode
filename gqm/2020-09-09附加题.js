/**
 * // 完成一个转换函数，将数字转成对应的大写字母，满足下面的对应关系
// 1 => A
// 2 => B
// 3 => C
// ...
// 26 => Z
// 27 => AA
// 28 => AB
// 29 => AC
// ...
// 52 => AZ
// 53 => BA
// 54 => BB
// // 实现下方函数
// function convert() {
//   // TODO
// }

// // 测试代码：
// const output1 = convert(1);
// console.log(output1); // A

// const output2 = convert(26);
// console.log(output2); // Z

// const output3 = convert(53);
// console.log(output3); // BA
 */

function convert(num) {
  const letter2num = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if(num < 0) return 0
  if(num < 27) return letter2num[num - 1]

  const point = parseInt(num / 26)
  const ones = num % 26

  return `${letter2num[point - 1]}${letter2num[ones === 0 ? 0 : ones - 1]}`
}


console.log(convert(1))

console.log(convert(26))
console.log(convert(52))
console.log(convert(53))