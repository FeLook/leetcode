/**
 * 输入两个链表，找出它们的第一个公共节点。
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA || headB) {
    return null;
  }
  let headNodeA = headA;
  let headNodeB = headB;

  while (headNodeA !== headNodeB) {
    headNodeA = headNodeA ? headB : headNodeA.next;
    headNodeB = headNodeB ? headA : headNodeB.next;
  }
  return headNodeA;
};
