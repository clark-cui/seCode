//144. 二叉树的前序遍历(easy) https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const searchTree = (node) => {
    if (!node) return;
    res.push(node.val);
    searchTree(node.left);
    searchTree(node.right);
  }
  searchTree(root);
  return res;
}

//94. 二叉树的中序遍历(easy)https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const searchTree = (node) => {
    if (!node) return;
    searchTree(node.left);
    res.push(node.val);
    searchTree(node.right);
  }
  searchTree(root);
  return res;
}


//145. 二叉树的后序遍历（easy）https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const searchTree = (node) => {
    if (!node) return;
    searchTree(node.left);
    searchTree(node.right);
    res.push(node.val);
  }
  searchTree(root);
  return res;
}


//257. 二叉树的所有路径(easy) https://leetcode-cn.com/problems/binary-tree-paths/
// 就是前序遍历的变种
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  const binarys = (node, s) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      s += node.val
      res.push(s);
      return;
    }
    s += node.val + '->';
    binarys(node.left, s);
    binarys(node.right, s);

  }
  binarys(root, '');
  return res;
};

//98. 验证二叉搜索树(medium) https://leetcode-cn.com/problems/validate-binary-search-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (node, lower, upper) => {
    if (!node) {
      return true;
    }
    if (node.val <= lower || node.val >= upper) {
      return false;
    }
    return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
  }
  return helper(root, -Infinity, Infinity);
}

//236. 二叉树的最近公共祖先(medium) https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 思路是肯定是有公共祖先的；递归左右两边，去找p或者q，如果左右都有值，那说明node就是根；如果左边没有值，说明根就在右边；如果右边没有值，根就是左边
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const helper = (node, p, q) => {
    if (!node || node === p || node === q) {
      return node;
    }
    let left = helper(node.left, p, q);
    let right = helper(node.right, p, q);

    if (left && right) {
      return node;
    } else if (!left) {
      return right;
    } else {
      return left;
    }
  }
  return helper(root, p, q);
};

//102. 二叉树的层序遍历(medium) https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 用一个队列维护，本质是bfs
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const queue = [],
    res = [];
  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    const part = [];
    for (let i = 0; i < size; i++) {
      let item = queue.shift();
      part.push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    res.push(part);
  }
  return res;
};

//107. 二叉树的层序遍历 II(medium) https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
//与上面的差别就是res那里是unshift不是push
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  };
  const queue = [],
    res = [];
  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    const part = [];
    for (let i = 0; i < size; i++) {
      let item = queue.shift();
      part.push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    res.unshift(part);
  }
  return res;
};

//104. 二叉树的最大深度(easy) https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 这个题也可以用上面的方法做，也就是层序遍历bfs，然后返回res的length即可
// 推荐的做法是dfs,找最长的即可
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};