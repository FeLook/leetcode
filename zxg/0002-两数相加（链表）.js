/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-28 17:10:12
 * @LastEditTime: 2021-02-28 22:29:13
 */

/***
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
   请你将两个数相加，并以相同形式返回一个表示和的链表。
   你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
   
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/



var addTwoNumbers = function (l1, l2) {
  let stack1 = [], stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carry = 0;
  let preHead = new ListNode(-1)
  let preNode = preHead
  while (stack1.length || stack2.length || carry) {
    let val1 = stack1.length ? stack1.shift() : 0
    let val2 = stack2.length ? stack2.shift() : 0
    let sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    preNode.next = new ListNode(sum % 10)
    preNode = preNode.next
  }
  return preHead.next
}