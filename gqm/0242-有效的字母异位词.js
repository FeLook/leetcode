/** 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 示例 1:

 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 示例 2:

 * 输入: s = "rat", t = "car"
 * 输出: false
 * 说明:
 * 你可以假设字符串只包含小写字母。

 * "aacc" "ccac"  输出: false
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
*/

const isAnagram = (s, t) => {
  if(s === t) return true;
  if(s.length !== t.length) return false;
  let comparedArr = t.split('').map(item => decodeURIComponent(item))
  const selfArr = s.split('').map(item => {
    const nIndex = comparedArr.indexOf(decodeURIComponent(item))
    if(nIndex !== -1){
      comparedArr.splice(nIndex,1)
      return item
    }else {
      return ''
    }
  })
  return selfArr.join('').length === t.length
};

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','car'))
console.log(isAnagram('aacc','ccac'))