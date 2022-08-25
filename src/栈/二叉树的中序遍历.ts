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
