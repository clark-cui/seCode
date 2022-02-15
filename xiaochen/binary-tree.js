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
 var isValidBST = function(root) {
  const helper=(node,lower,upper)=>{  
      if(!node){
          return true;
      }
      if(node.val<=lower||node.val>=upper){
          return false;
      }
      return helper(node.left,lower,node.val)&&helper(node.right,node.val,upper);
  }
  return helper(root,-Infinity,Infinity);
}

//236. 二叉树的最近公共祖先(medium) https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 思路是肯定是有公共祖先的；递归左右两边，去找p或者q，如果左右都有值，那说明node就是根；如果左边没有值，说明根就在右边；如果右边没有值，根就是左边
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  const helper =(node,p,q)=>{
      if(!node||node===p||node===q){
          return node;
      }
     let left= helper(node.left,p,q);
     let right=helper(node.right,p,q);

     if(left&&right){
         return node;
     }
     else if(!left){
         return right;
     }else{
         return left;
     }
  }
  return helper(root,p,q);
};