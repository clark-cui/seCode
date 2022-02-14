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

