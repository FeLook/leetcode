/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-18 17:09:42
 * @LastEditTime: 2021-02-20 15:40:57
 */
// 反转一个单链表。

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 迭代法 动画解析 https://leetcode-cn.com/problems/reverse-linked-list/solution/shi-pin-jiang-jie-die-dai-he-di-gui-hen-hswxy/
 * 
 * 头 一步步变成尾
 * 
 * prev curr next prev->curr curr->next 移动
 * 关键 curr.next = prev
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  if(!head || !head.next) return head
  let prev = null, curr = head
  while(curr !== null) {
    // 用于临时存储 curr 后继节点
    let next = curr.next
    // 反转 curr 的后继指针
    curr.next = prev
    // 变更prev、curr
    // 待反转节点指向下一个节点
    prev = curr
    curr = next
  }
  head = prev
  return head
};


// 递归
const reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  // 递  - 这里的cur就是最后一个节点，也就是反转后的头节点
  const newHead = reverseList(head.next); // 反转后的头节点

  // 归 - 这里请配合动画演示理解
  //如果链表是 1->2->3->4->5，那么此时的cur就是5
  //而head是4，head的下一个是5，下下一个是空
  //所以head.next.next 就是5->4
  head.next.next = head; // 将反转后的链表的尾结点与当前节点相连
  //防止链表循环，需要将head.next设置为空
  head.next = null;
  
  //每层递归函数都返回cur，也就是最后一个节点
  return newHead;
};

 // 翻转列表 列出每个val 放进去
var reverseList = function (head) {
  if (!head || !head.next) return head
  let arr = [];
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let res = {}
  arr.reverse().reduce((pre, cur , index) => {
    pre.val = cur
    if (index === arr.length - 1) {
      pre.next = null
    } else {
      pre.next = {}
    }
    return pre.next
  }, res)
  return res
};










class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 用于查找
  find(item) {
    let node = this.head;
    while (node !== null && node.el !== item) {
      node = node.next;
    }
    return node;
  }

  findPrev() {
    let node = this.head;
    while (node.next !== null && node.next.el !== item) {
      node = node.next;
    }
    return node;
  }

  // 插入节点
  insert(el, item) {
    // 新节点
    const newNode = new Node(el);
    // 插入的节点
    const currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 删除节点
  remove(item) {
    const prevNode = this.findPrev(item);
    if (prevNode.next !== null) {
      // 指向下一个元素，这行代码很关键
      prevNode.next = prevNode.next.next;
    }
  }
}
var a = new LinkedList()
a.insert('000', 'head')
a.insert('111', '000')
a.insert('222', '111')
a.insert('333', '222')
