// 快乐数这个名字取得好，颇具哲学意味
// 首先要清楚，不快乐的数进入了无穷无尽的循环中，不过这个循环有规律可循，找到这个规律break掉，就可以实现了。
// 还可以了解一下快慢指针
var isHappy = function(n) {
  function sum(num){
    const arr = String(num).split('');
    let sum = 0;
    for(let i =0;i<arr.length;i++) {
      sum += arr[i] * arr[i];
    }
    return sum
  }
    let res = sum(n);
    let obj = {};
    while(res >1) {
      if(res in obj) return false;
      obj[res] = 1;
      res = sum(res);
    }
    return true
};