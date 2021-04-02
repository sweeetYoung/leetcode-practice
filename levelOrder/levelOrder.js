
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let root = [3,9,20,null,null,15,7]
function levelOrder(root) {
  var arr=[];
  var data=[];
  if(root!=null){
    arr.push(root);
  }
  console.log(arr)
  while(arr.length!=0){
    var node=arr.shift();
    console.log(node.left)
    if(node.left!=null){
      arr.push(node.left);
    }
    if(node.right!=null){
      arr.push(node.right);
    }
    data.push(node.val);
  }
  return data;
}

levelOrder(root);