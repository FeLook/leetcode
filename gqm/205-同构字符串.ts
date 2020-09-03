/** 
 * 给定两个字符串 s 和 t，判断它们是否是同构的。

  如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

  所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
  两个字符不能映射到同一个字符上，但字符可以映射自己本身。

  输入: s = "egg", t = "add"
  输出: true
*/

const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length)  return false;
  if (s === t) return true;
  let mapS = {}, mapT = {};
  for (let i = 0; i < s.length; i++) {
      if (!mapS[s[i]]) mapS[s[i]] = t[i];
      if (!mapT[t[i]]) mapT[t[i]] = s[i];
      if (mapS[s[i]] != t[i] || mapT[t[i]] != s[i]) return false;
  }
  return true
};

console.log(isIsomorphic('egg', 'add'))