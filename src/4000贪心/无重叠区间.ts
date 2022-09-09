function eraseOverlapIntervals(intervals: number[][]): number {
  if (!intervals.length) return 0;

  // 按右边界排序
  intervals.sort((a, b) => a[1] - b[1]);

  const len = intervals.length;
  let right = intervals[0][1];
  let ans = 1;

  for (let i = 1; i < len; ++i) {
    if (intervals[i][0] >= right) {
      ++ans;
      right = intervals[i][1];
    }
  }

  return len - ans;
}

// 不明白
function eraseOverlapIntervals1(intervals: number[][]): number {
  if (!intervals.length) return 0;

  // 按右边界排序
  intervals.sort((a, b) => a[1] - b[1]);

  const len = intervals.length;
  const dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return len - Math.max(...dp);
}
