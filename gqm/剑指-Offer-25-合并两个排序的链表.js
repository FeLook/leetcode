/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */

var mearge = function(list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val < list2.val) {
    list1.next = mearge(list1.next, list2);
    return list1;
  } else {
    list2.next = mearge(list1, list2.next);
    return list2;
  }
};