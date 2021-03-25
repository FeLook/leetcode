/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-02 19:16:16
 * @LastEditTime: 2021-03-15 22:31:47
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/***
 * 
 * 递归二叉树的节点，获取左子树和右子树的最大深度，比较后，返回最大深度
 * DFS Depth First Search 思想
 * 
    详解
    判断二叉树是否为空，空的直接返回 0，结束，非空二叉树继续
    分别递归计算左右子树的最大深度
    根据返回两者的两者数字，比较后的返回二叉树的最大深度
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) 0
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  const childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
  return 1 + childDepth;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


