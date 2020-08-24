/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，
 * 每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null。
 */


const copyRandomList = (head) => {
  if (head == null) return head;
  let map = new Map(), curr = head;
  while (curr) {
      let newNode = new Node(curr.val);
      map.set(curr, newNode);
      curr = curr.next;
  };

  curr = head;
  while (curr) {
      let newNode = map.get(curr);
      let next = map.get(curr.next);
      let random = map.get(curr.random);
      if (next) newNode.next = next;
      if (random) newNode.random = random;
      curr = curr.next;
  };
  return map.get(head);
}