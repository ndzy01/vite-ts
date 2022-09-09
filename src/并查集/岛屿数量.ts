class UnionFind {
  count: number;
  parent;
  size;

  constructor(n: number) {
    // 构造一个节点数为n的集合
    this.count = n; // 并查集总数
    this.parent = new Array(n);
    this.size = new Array(n); // size 数组记录着每棵树的重量

    for (let i = 0; i < n; i++) {
      this.parent[i] = i; // 自己是自己的 parent
      this.size[i] = 1; // 每个集合上节点的数量
    }
  }

  union(p: number, q: number) {
    //连通结点 p 和结点 q, p 和 q 都是索引
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) return;

    // 元素数量小的接到数量多的下面, 这样比较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }

    this.count--;
  }

  isConnected(p: number, q: number) {
    // 判断 p,q 是否连通
    return this.find(p) === this.find(q);
  }

  find(x: number) {
    // 找到 x 结点的 root
    while (this.parent[x] != x) {
      // 进行路径压缩
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }

    return x;
  }

  getCount() {
    // 返回子集个数
    return this.count;
  }
}

function numIslands(grid: string[][]): number {
  let m = grid.length;

  if (m === 0) return 0;

  let n = grid[0].length;
  const dummy = -1;
  const dirs = [
    [1, 0],
    [0, 1],
  ]; // 方向数组 向右 向下
  const uf = new UnionFind(m * n);

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++)
      if (grid[x][y] === '0') {
        // 如果网格是 0，则和 dummy 合并
        uf.union(n * x + y, dummy);
      } else if (grid[x][y] === '1') {
        // 如果网格是 1，则向右 向下尝试
        for (let d of dirs) {
          let r = x + d[0];
          let c = y + d[1];
          if (r >= m || c >= n) continue; // 坐标合法性
          if (grid[r][c] === '1') {
            // 当前网格的右边 下面如果是1，则和当前网格合并
            uf.union(n * x + y, n * r + c);
          }
        }
      }
  }

  return uf.getCount(); // 返回并查集的个数减一就行
}
