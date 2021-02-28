/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-18 14:13:02
 * @LastEditTime: 2021-02-20 18:52:02
 */
// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2: 

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？


let isPalindrome = function (head) {
  let node = head
  if (!node) return true
  let arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  return arr.join('') === arr.reverse().join('')
}


// 找到链表的中间节点，将前半部分的链表反转，与后半部分链表数据进行比较。 为了找到中间位置，采用两个引用，步调速度相差 1，当快的引用到达最终节点时，慢的正好在中间。
// 详解
// 分别定义快、慢指针，及前半部分的指针存储
// 遍历链表，快指针走 2 步，慢指针走 1 步，同时将慢指针对应的前半部分链表进行反转
// 链表结束后，慢指针指向中间，与前半部分反转的链表进行逐个比较

function isPalindrome (head) {
  // 空或者单节点
  if (!head || !head.next) {
    return true;
  }

  let slowRef = head; // 慢指针
  let fastRef = head; // 快指针
  let reverseRef; // 反转前半部分
  let reversePreRef; // 反转前一个节点
  // 连续 2 个节点都存在
  while (fastRef && fastRef.next) {
    // 快指针前进 2 步
    fastRef = fastRef.next.next;

    reverseRef = slowRef;
    // 慢指针前进 1 步
    slowRef = slowRef.next;

    // 反转链表
    reverseRef.next = reversePreRef;
    // 记录上一个节点
    reversePreRef = reverseRef;
  }

  // 奇数场景
  if (fastRef) {
    // 中间值不用比较，慢指针直接前进一步
    slowRef = slowRef.next;
  }

  while (reverseRef && slowRef) {
    // 链表逐个值比较
    if (reverseRef.val !== slowRef.val) {
      return false;
    }
    reverseRef = reverseRef.next;
    slowRef = slowRef.next;
  }
  return true;
}
