<!--
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-03 00:31:13
 * @LastEditTime: 2021-05-17 23:58:35
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
  * 单次：找最小值 最大值之差的最大值
  * 多次：滑动窗口 queue = [min, max] ， 若arr[i] < queue[queue.length -1] 算一笔收益。 主要是比较递增 递减的判断.

* 三数之和
  * 先排序->从左到右依次固定->两个指针left right移动。 当满足时，需要注意相同的数时一直++或者--。

## 动态规划
> 动态解题思路 https://zhuanlan.zhihu.com/p/91582909
1. 定义数组元素的含义
2. 找出数组元素间的关系式
3. 找出初始条件
> 一维数据定义 

> 二维数据定义 https://www.bilibili.com/video/BV1EK411K7Eb
  i 转化为行, j 转化为列
  'abc' 'def'

        ~ d e f        j
      ~ 0
      a
      b
      c

      i


* 0070爬楼梯 走一步或两步 dp[n]=dp[n-1]+dp[n-2]  [0,1,2]初始值

* 0322 零钱兑换最少硬币 coins = [1,2,5] amount = 9
  1. 定义: dp[i]为兑换i需要最少的硬币
  2. 关系： dp[i] = Math.min(dep[i - coin] + 1, dep[i])  (0~amount,每个需要的dp[i]. 当前coin = coins[j]需要dp[i-coin]+1)
  3. 初始值 dep[0] = 0
* 0518 零钱兑换有多少种 coins = [1,2,5] amount = 5
  1. 定义: dp[i][j] 前i种硬币兑换j有多少种
  2. 关系： 可从最后一枚硬币用的次数(k, 0~)次，来判断。  dp[i][j] += dp[i - 1][j - k * coins[i - 1]] (coins[i - 1] * k <= j)
  3. 初始值 初行 1 ~ 0 , 初列 1 ~ 1

* 0300最长上升子序列  从dp[i] = 1, nums[i] > nums[j]) dp[i] = Math.max(dp[j]+1, dp[i]) 都和当前i不比，若比i小 就是当前dp[j]+1 和 dp[i]取最大值，然后  result = Math.max(result, dp[i] )

* 0053最大子序和 dp[i]=Math.max(nums[i], dp[i−1]) result = Math.max(dp[i], result)
 1. 定义： dp[i] 为第i元素为结尾的最大和。

* 1143 最长公共子序长度, abcde  acfe, 长度为3 -> ace 
  1. 定义： dp[i][j] 为公共最长长度
  2. 关系：相等 ~ dp[i][j] ？ = 左上角 + 1 ： max(上，左)
  3. 初始值 初行 0 ~ 0 , 初列 0 ~ 0
 
  m x n 矩阵 判断 m[y] === n[x] ? dp[y][x]取上个对角线值+1，否则取上、左的最大值。
* 0072 编辑距离 word1->word2 需要最短步骤,可通过 插df[i][j-1]、删df[i-1][j]、修df[i-1][j-1] 三种操作。
   1. 定义： dp[i][j] word1前i字符转化为word2前j字符所需最少操作个数
   2. 关系：相等 ~ dp[i][j] ？ = 左上角 ： 左三角最小 +1.
   3. 初始值 ： 初行 0->i , 初列 0->j 


> flex
> 无重复字符的最长子串