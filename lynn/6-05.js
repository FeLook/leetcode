  
  // 给定一个Excel表格中的列名称，返回其相应的列序号。

  // 例如，
  
  //     A -> 1
  //     B -> 2
  //     C -> 3
  //     ...
  //     Z -> 26
  //     AA -> 27
  //     AB -> 28 
  //     ...
  // 26进制转换十进制
  
  var titleToNumber = function(s) {
        let lastIndex = s.length-1;
        let result = 0
        for(let i = 0; i<=lastIndex;i++){
            result += Math.pow(26,lastIndex-i) * (s[i].charCodeAt()-64)
        }
        return result
  };
