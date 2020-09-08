/**
 * 版本号比对，传入数组，返回排序完成的
 */

const sortVersion = (arr) => {
  function handleVersion(sVersion) {
    let versionArr = sVersion.split(".");
    let firstNum = versionArr.splice(0, 1);
    return `${firstNum}.${versionArr.join("")}`;
  }
  arr.sort((a, b) => {
    return +handleVersion(a) - +handleVersion(b);
  });
  return arr;
};

console.log(sortVersion(["1.2.4", "0.2.3", "1.4.4"]));
