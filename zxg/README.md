

## 相关知识点

* \1* 多个相同字符 cover 0038-字符串-外观数列(报数)
* `^` 操作运算符




## 相关总结信息

### 链表相关

* 翻转链表
  * 迭代 pre cur next
  * 递归 newHead 递，head.next.next = head head.next = null 归
  * 递归所有值val到arr中,arr.reverse().reduce(fn, {}) 求结果
* 判断是否环形链表
  * new Map().set(head, 1), 判断 Map 是否存在同一个值。
  * 每一个值 为 const dd = Symbol('')， 判断是否有等于dd。
  * 两个指针 一个走2 一个走1，如果相等 则是环形。
* 判断是否回文链表
  * 遍历所有值 和 reverse 后想比较。
  * TODO: 更多方法
* 删除链表的倒数第N个节点
  * first secound 双指针，先整到第n，一起移位。
  * TODO: 双链表
* 合并两个有序连报表
  * 递归 谁小指向谁的next 指向 下一个递归。若当前不存在 放回另一个链表。
  * 双指针 prehead 指针不动， preNode 从头往后移动。
* 两数相加
  * stack1，stack2、然后固定头指针 prenode从头往后移动赋值。
* 排序链表
  * 转换为数组 sort排序 链表依次改值
* 相交链表
  * a,b 相交。 ab ba 必相遇时相等。
* 奇偶链表
  * odd，even = head.next, eventHeaderPoint = head.next，移动odd++,event++, 最后合并odd.next = eventHeaderPoint return head

