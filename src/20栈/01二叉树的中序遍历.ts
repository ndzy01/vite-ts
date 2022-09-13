import { TreeNode } from '../index';

function inorderTraversal(root: TreeNode | null): number[] {
  const stack: number[] = [];

  const loop = (tree: TreeNode | null) => {
    if (tree) {
      loop(tree.left);

      stack.push(tree.val);

      loop(tree.right);
    }
  };

  loop(root);

  return stack;
}

console.log(
  inorderTraversal({
    val: 2,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null },
  }),
);
