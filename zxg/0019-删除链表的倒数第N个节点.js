/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-20 15:41:41
 * @LastEditTime: 2021-02-20 17:36:36
 */
/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 */


 // 双指针：首位、第n， 一起移位 n变为 n.next === null 时， first 为要删的值
 const removeNthFromEnd = (head, n) => {
  let first = head;
  let second = head;
  while (n > 0) {
    first = first.next;
    n -= 1;
  }
  if (!first) return head.next; // 如果first为null，则要删除的节点是首节点，直接返回head的下一个节点
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};

