function coinChange(coins: number[], amount: number) {
  // 定义初始状态
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i < amount; ++i) {
      // 状态方程式
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
