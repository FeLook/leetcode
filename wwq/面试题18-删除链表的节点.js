var deleteNode = function(head, val) {
  let current = head;
  let pre = null;
  while (current) {
    if (current.val === val) {
      if (pre) {
        pre.next = current.next;
      } else {
        // 第一个节点
        head = head.next;
      }
      break;
    }
    pre = current;
    current = current.next;
  }
  return head;
};
