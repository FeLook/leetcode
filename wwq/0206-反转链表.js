var reverseList = function(head) {
  if (!head) return head;
  let current = head;
  let pre = null;
  while (current != null) {
    let tmp = current.next;
    current.next = pre;
    pre = current;
    current = tmp;
  }
  return pre;
};
// 先保存当前的next，因为需要断开跟后面的关系，
// 然后让当前的next等于上一个保存的，跟之前的连上线，
// 然后更新pre之前的元素，最后current = tmp继续让循环走刚刚断开链接的元素，继续执行
