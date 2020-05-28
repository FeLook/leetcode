var wordBreak = function(s, wordDict) {
  let states = new Array(s.length + 1).fill(false);
  let obj = {};
  // 转成数组，方便后面循环里一次就可以查找
  for (const item of wordDict) {
    obj[item] = item;
  }
  states[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // 主要是判断边界，跟slice的api也有关系，比如leetcode 0，3匹配的是lee，需要(0,4)才能匹配到leet，当前states[j] 其实代表的就是这里的0，也就是我们初始化的states[0] = true;
      // 第二次匹配到code，slice取到的是 （4，8）states[j]现在就是4了，
      // 所以根据这个规则超出了s的长度，需要多加一位，也就是代码 states = new Array(s.length + 1)需要注意的地方
      // states[j]是关键，即使你匹配上了，需要拿这个判断开头和结尾states[j]代表的就是开头是否是true,其实就是判断上一个是否符合单词的条件
      if (states[j] && obj[s.slice(j, i)]) {
        states[i] = true;
        break;
      }
    }
  }

  // console.log(states);
  return states[s.length];
};
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));
console.log(wordBreak("cars", ["car", "ca", "rs"]));
