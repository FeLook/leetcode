/**
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 * 
 * 给定一个二叉树，返回其按层次遍历的节点值。（即逐层地，从左到右访问所有节点）。
 * 
  给定二叉树 [3,9,20,null,null,15,7]，
      3   
    / \  
    9  20    
      /  \  
    15   7
  返回其层次遍历结果：[[3],[9,20],[15,7]]
 * 
 * 
 */

// dfs 解法
const levelOrder = function (root) {
  return dfs(root, [], 0)
}

function dfs(node, res, leval) {
  if (node === null) return res
  if (res.length === leval) {
    res.push([node.val])
  } else {
    res[leval].push(node.val)
  }
  dfs(node.left, res, leval + 1)
  dfs(node.right, res, leval + 1)
  return res
}


// bfs 解法
const levelOrder = function (root) {
  let res = []
  if (!root) return res
  let queue = [root]
  while (queue.length) {
    let  newQueue = []
    let resLeaval = []
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      resLeaval.push(node.val)
      if (node.left) newQueue.push(node.left)
      if (node.right) newQueue.push(node.right)
    }
    res.push(resLeaval)
    queue = newQueue
  }
  return res
}