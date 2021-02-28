/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-16 17:01:21
 * @LastEditTime: 2021-02-18 14:11:57
 */

/**
 * 单链表
 */
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



class DoubleNode {
  constructor(el) {
    this.el = el;
    this.prev = null;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = new DoubleNode('head');
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
    const newNode = new DoubleNode(el);
    // 插入的节点
    const currentNode = this.find(item);

    // 将 X 的 next 指向 B 的 next (C)
    newNode.next = currentNode.next;
    // 将 X 的 prev 指向 B
    newNode.prev = currentNode;
    // 将 C 的 prev 指向 X
    currentNode.next.prev = newNode;
    // 将 B 的 next 指向 X
    currentNode.next = newNode;
  }

  // 删除节点
  remove(item) {
    const prevNode = this.findPrev(item);
    const node = this.find(item);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    
    node.next = null;
    node.prev = null;
  }
}