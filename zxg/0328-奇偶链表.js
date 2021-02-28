/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-28 23:22:07
 * @LastEditTime: 2021-03-01 00:02:41
 */

/**
 * 
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
   请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

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
const oddEvenList = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }
  let odd = head
  let even = head.next
  const eventHeaderPoint = even
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next
    odd = odd.next

    even.next = even.next.next
    even = even.next
  }
  odd.next = eventHeaderPoint;
  return head
};
