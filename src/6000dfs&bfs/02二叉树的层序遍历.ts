import { TreeNode } from '../index';

const levelOrder = (root: TreeNode | null): number[][] => {
  const res: number[][] = [];

  if (!root) return res;

  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length) {
    const currentLevelSize = queue.length;
    // 预存一个空数组 存储层节点数据
    res.push([]);

    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = queue.shift();

      if (node) {
        res[res.length - 1].push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  return res;
};

const res = levelOrder({
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
});

console.log(res);
