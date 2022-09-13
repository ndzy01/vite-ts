// 递归
const f1 = (n: number): number => {
  if (n == 1) return 1;
  if (n == 2) return 2;

  return (f1(n - 1) + f1(n - 2)) % 1000000007;
};

// 递归 + 记忆
const f2 = (n: number): number => {
  const memo: Record<string, number> = {};

  const loop = (x: number): number => {
    if (memo[x]) return memo[x];
    if (x == 1) return 1;
    if (x == 2) return 2;

    memo[x] = loop(x - 1) + loop(x - 2);

    return memo[x];
  };

  return loop(n) % 1000000007;
};

// 动态规划
const f3 = (n: number): number => {
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n - 1];
};

console.log(f1(10));
console.log(f2(10));
console.log(f3(10));
