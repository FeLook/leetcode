/***
 * 环形链表
 * 给定一个链表，判断链表中是否有环。 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
 * 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 */


 // hash 整个 next 判断
const hasCycle = function (head) {
  if (!head) return false;
  const newData = new Map();
  while (head) {
    if (newData.has(head)) return true;
    newData.set(head, 1);
    head = head.next;
  }
  return false;
};

 // 类  .val 判断
const hasCycle2 = function (head) {
  if (!head) return false;
  // 新唯一值
  const newData = Symbol('');
  while (head) {
    if (head.val === newData) return true;
    head.val = newData;
    head = head.next;
  }
  return false;
};


const hasCycle3  = function (head) {
  if (!head) return false;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};


