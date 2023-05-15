/**
 * Definition for a binary tree node.
**/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function deepestLeavesSum(root: TreeNode | null): number {
    //support variables
    let first: TreeNode[] = [root];
    let second: TreeNode[] = [];
    //BFS
    while (first.length) {
        //populating second
        for (let node of first) {
            if (node.left) {
                second.push(node.left);
            }
            if (node.right) {
                second.push(node.right);
            }
        }
        //checking if it's the last level
        if (!second.length) {
            return first.reduce((acc: number, node: TreeNode) => acc + node.val, 0);
        }
        //preparing for the next iteration
        first = second;
        second = [];
    }
    return 0;
};

const root = [1,2,3,4,5,null,6,7,null,null,null,null,8];
const result = deepestLeavesSum(root);
console.log(result);
// expect Output: 15