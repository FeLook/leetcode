// 本题node节点就是需要被删除的节点
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
