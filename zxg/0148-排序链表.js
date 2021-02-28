/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-28 22:33:38
 * @LastEditTime: 2021-02-28 23:06:41
 */


 /***
  * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
  * 
  * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
  */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
  // 只有一个元素
  if (head === null || head.next === null) {
    return head;
  }
  let cur = head; let index = 0; const arr = [];
  // 链表转化为数组
  while (cur !== null) {
    arr[index] = cur.val;
    cur = cur.next;
    index += 1;
  }
  arr.sort((a, b) => a - b); // 数组升序排序 nloggn
  cur = head;
  index = 0;
  // 重建链表
  while (cur !== null) {
    cur.val = arr[index];
    index += 1;
    cur = cur.next;
  }
  return head;
};