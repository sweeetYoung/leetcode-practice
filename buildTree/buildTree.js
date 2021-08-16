/**
 * 从前序遍历与中序遍历序列中构造二叉树
 * @param preorder
 * @param inorder
 * @returns {null}
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function buildTree (preorder, inorder) {
    let result = null;
    // 如果前序遍历序列的数组长度大于1，说明不止有根节点
    if (preorder.length > 1) {
      // 前序遍历序列中第一个项即为根节点
      let root = preorder[0];
      // 获取根节点的值后，在中序遍历序列中获取根节点所在下标值
      let inorderRootIndex = inorder.indexOf(root);
      // 根据中序遍历序列中 左-根-右 找到中序遍历序列中的左子树和右子树
      let inorderLeft = inorder.slice(0,inorderRootIndex);
      let inorderRight = inorder.slice(inorderRootIndex + 1, inorder.length)
      // 前序遍历序列  去除根节点
      preorder.shift();
      // 根据前序遍历序列 以及中序遍历序列已确认的左子数和右子数 区分开前序遍历的左子树和右子数
      let preorderLeft = preorder.slice(0, inorderLeft.length);
      let preorderRight = preorder.slice(inorderLeft.length, preorder.length);
      result = {
        val: root,
        left: buildTree(preorderLeft, inorderLeft),
        right: buildTree(preorderRight, inorderRight)
      }
    } else if (preorder.length === 1) {
      result = {
        val: preorder[0],
        left: null,
        right: null
      }
    }
    return result;
}

let pre1 = [3,9,20,15,7];
let in1 = [9,3,15,20,7]

console.log(buildTree(pre1, in1))