//Given a binary tree, find its maximum depth.
//The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//Note: A leaf is a node with no children.

//Given binary tree [3,9,20,null,null,15,7]
//Depth = 3
//
// Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }

var maxDepth = function(root) {
  if (root === null) {
    return 0;
  } else {
    return depthHelper(root, 1);
  }
};

var depthHelper = (root, num) => {
  if (root.left === null && root.right === null) {
    return num;
  } else if (root.left === null) {
    return depthHelper(root.right, num + 1);
  } else if (root.right === null) {
    return depthHelper(root.left, num + 1);
  } else if (root.right && root.left) {
    return Math.max(
      depthHelper(root.right, num + 1),
      depthHelper(root.left, num + 1)
    );
  }
};
