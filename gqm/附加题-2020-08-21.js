/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
  说明: 叶子节点是指没有子节点的节点。

  示例: 
  给定如下二叉树，以及目标和 sum = 22，
                5
              / \
              4   8
            /   / \
            11  13  4
          /  \      \
          7    2      1

  返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 */

// 直接前序
var pathSum = function (root, sum) {
  let res = [];
  let path = [];
  if (!root) return [];
  recur(root, sum);
  function recur(root, sum) {
    // 函数开头，函数入栈执行
    path.push(root.key);
    if (!root.left && !root.right && root.key === sum) {
      res.push(path.slice());
    }
    if (root.left) {
      recur(root.left, sum - root.key);
    }
    if (root.right) {
      recur(root.right, sum - root.key);
    }
    path.pop();
    // 函数末尾， 函数执行结束准备出栈
  }
  return res;
};

