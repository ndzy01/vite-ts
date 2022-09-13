// 暴力递归
const fib1 = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib1(n - 1) + fib1(n - 2);
};

console.log(fib1(5));

// 递归 + 记忆
const fib2 = (n: number): number => {
  const memo: Record<string, number> = {}; // 计算出的结果进行缓存

  const loop = (x: number): number => {
    if (memo[x]) return memo[x];
    if (x === 0) return 0;
    if (x === 1) return 1;

    memo[x] = loop(x - 1) + loop(x - 2);

    return memo[x];
  };

  return loop(n);
};

console.log(fib2(5));

// 动态规划
const fib3 = (n: number): number => {
  if (n <= 1) return n;

  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    // 自底向上计算每个状态
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fib3(5));

// 动态规划 + 滚动数组
const fib4 = (n: number): number => {
  if (n <= 1) return n;

  const dp = [0, 1];
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    // dp[i] 只和 dp[i-1] 和 dp[i-2] 有关, 只维护长度为 2 的滚动数组即可
    sum = dp[0] + dp[1];
    [dp[0], dp[1]] = [dp[1], sum];
  }

  return sum;
};

console.log(fib4(5));
