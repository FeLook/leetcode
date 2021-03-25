/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-02-16 17:01:21
 * @LastEditTime: 2021-03-09 20:33:23
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

var a = {
  a: { a: true },
  b: function () { console.log('this', this) },
  c: Symbol('222'), d: /\a/,
  e: [],
  f: new Map(),
  e: () => { console.log('this ->', this) },
  g: Object.create({ a: 1 })
}



// 判断是否是引用数据类型
deepClone.isComplexDataType = obj => obj !== null && (typeof obj === 'function' || typeof obj === 'object');
// 存放 typeof === "object" 的构造器，用于区别 obj 是否是普通对象
deepClone.objType = [Date, RegExp, WeakMap, WeakSet, Map, Set];

function deepClone(obj, hash = new WeakMap()) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  /** tip：能递归进入该函数的都是引用类型数据 **/

  // 判断是否有缓存，如果有则直接返回，解决了递归爆栈的情况
  // 例：obj.loop = obj：当这样形成环后，如果递归进入 deepClone，会返回第一次创建的 cloneObj
  if (hash.has(obj)) return hash.get(obj);
  // 如果不是普通对象，则拷贝一个新 obj 返回
  if (deepClone.objType.includes(obj.constructor)) return new obj.constructor(obj);

  // 获取目标对象的所有属性描述对象
  const allDescriptions = Object.getOwnPropertyDescriptors(obj);
  // 原型拷贝
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDescriptions);

  // 缓存拷贝的对象
  hash.set(obj, cloneObj);

  // Reflect.ownKeys 以数组形式返回对象的属性名（包括符号属性和不可枚举属性） 获取对象中所有的属性名（包含Symbol值）
  for (let key of Reflect.ownKeys(obj)) {
    const value = obj[key];

    // 原始类型属性直接返回
    // 引用类型属性继续递归deepClone
    cloneObj[key] = (deepClone.isComplexDataType(value) && typeof value !== 'function') ?
      deepClone(value, hash) : value;
  }

  return cloneObj;
}
