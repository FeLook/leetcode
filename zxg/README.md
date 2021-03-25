<!--
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-03 00:31:13
 * @LastEditTime: 2021-03-26 00:54:02
-->


## 相关知识点

* \1* 多个相同字符 cover 0038-字符串-外观数列(报数)
* `^` 操作运算符




## 相关总结信息

### 链表相关

* 翻转链表 0206
  * 迭代 pre cur next
  * 递归 newHead 递，head.next.next = head head.next = null 归
  * 递归所有值val到arr中,arr.reverse().reduce(fn, {}) 求结果
* 判断是否环形链表 0141
  * new Map().set(head, 1), 判断 Map 是否存在同一个值。
  * 每一个值 为 const dd = Symbol('')， 判断是否有等于dd。
  * 两个指针 一个走2 一个走1，如果相等 则是环形。
* 判断是否回文链表 0234
  * 遍历所有值 和 reverse 后想比较。
  * TODO: 更多方法
* 删除链表的倒数第N个节点 0019
  * first secound 双指针，先整到第n，一起移位。
  * TODO: 双链表
* 合并两个有序连报表 0021
  * 递归 谁小指向谁的next 指向 下一个递归。若当前不存在 放回另一个链表。
  * 双指针 prehead 指针不动， preNode 从头往后移动。
* 两数相加 0002
  * stack1，stack2、然后固定头指针 prenode从头往后移动赋值。
* 排序链表 0148
  * 转换为数组 sort排序 链表依次改值
* 相交链表 0169
  * a,b 相交。 ab ba 必相遇时相等。
* 奇偶链表 0328
  * odd，even = head.next, eventHeaderPoint = head.next，移动odd++,event++, 最后合并odd.next = eventHeaderPoint return head


### 树相关
* 最大深度与DFS 0104
  * === null 0.  求左右深度 Max.max( Max(root.left), Max(root.right)) + 1
* 层次遍历  DFS、BFS 0102
  * dfs (node, res, leval), dfs(node.left, res, leval + 1) ....
  * bfs [root] while循环，[root.left, root.right].length 遍历

### 数组
* 最长公共前缀
  * 数组第一个str循环，数组i=1再循环， 比较str.charAt(i) 和 arr[j].charAt(i) 全相等 ， 返回值追加当前字符串
* 买股票的最佳时机
  * 滑动窗口 queue = [min, max] ， 若arr[i] < queue[queue.length -1] 算一笔收益。 主要是比较递增 递减的判断.
* 三数之和
  * 先排序->从左到右依次固定->两个指针left right移动。 当满足时，需要注意相同的数时一直++或者--。

  



