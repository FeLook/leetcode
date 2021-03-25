/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-02 17:53:41
 * @LastEditTime: 2021-03-02 19:15:32
 */
// 插入新元素
function insert(data) {
  const n = new Node(data);
  if (this.tree === null) {
    this.tree = n;
    return;
  }
  let node = this.tree
  while (node !== null) {
    if (data > node.data) {
      if (node.right === null) {
        node.right = n
        return
      }
      node = node.right
    } else {
      // 可能相等
      if (data < node.data) {
        if (ndoe.left === null) {
          node.left = n;
          return;
        }
        node = node.left;
      }
    }
  }
}

// 二叉查找树的删除
function remove(data) {
  let node = this.tree;
  let parentNode;
  while (node !== null && node.data != data) {
    parentNode = node;
    if (data > node.data) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  if (node === null) {
    return; // 没找着
  }

  // 我们采用非递归的方式，先处理要删除的节点有两个子节点的情况
  if (node.left !== null && node.right !== null) {
    // 查找右子树中最小节点
    let minNodeParent = node;
    let minNode = minNodeParent.right;
    while (minNodeParent.left !== null) {
      minNodeParent = minNode;
      minNode = minNode.left;
    }
    node.data = minNode.data;
    node = minNode; // 下面就变成删除 minNode 了
    parentNode = minNodeParent;
  }

  // 删除节点是叶子节点或者只有一个子节点
  let childNode = null;
  if (node.left !== null) {
    childNode = node.left;
  } else if (node.right !== null) {
    childNode = node.right;
  }

  if (parentNode === null) { // 父节点是 null，说明删除的是根节点
    this.tree = childNode;
  // 第二种情况，把父节点的指向删除节点的指针指向删除节点的子节点
  // 删除的是 node，把 parentNode 指向 node 的指针，指向 childNode
  } else if (parentNode.left === node) {
    parentNode.left = childNode;
  } else {
    parentNode.right = childNode;
  }
}













