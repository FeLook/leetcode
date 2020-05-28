var removeNthFromEnd = function(head, n) {
  let h = new ListNode(0);
  h.next = head;
  let first = h;
  let current = h;
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    current = current.next;
  }
  current.next = current.next.next;
  return h.next;
};
